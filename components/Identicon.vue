<template>
  <div v-html="svgHtml" />
</template>


<script>
import * as jdenticon from "jdenticon";
import { isHex, isU8a, u8aToHex } from "@polkadot/util";
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto";

function encodeAccount(value, prefix) {
  try {
    const address =
      isU8a(value) || isHex(value) ? encodeAddress(value, prefix) : value;
    const publicKey = u8aToHex(decodeAddress(address, false, prefix));

    return { address, publicKey };
  } catch (error) {
    return { address: "", publicKey: "0x" };
  }
}

export default {
  props: ["address", "size"],
  data() {
    return {
      // eslint-disable-next-line quotes
      svgHtml: `<svg viewBox="0 0 64 64" />`,
    };
  },
  mounted() {
    this.createSvgHtml();
  },
  methods: {
    createSvgHtml: function () {
      const publicKey = encodeAccount(this.address).publicKey;
      this.svgHtml = jdenticon.toSvg(publicKey.substr(2), this.size);
    },
  },
};
</script>