<template>
  <div class="logo" :class="{ ready: isReady }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 160 160"
    >
      <defs>
        <style>
          .cls-1 {
            isolation: isolate;
          }
          .cls-2 {
            opacity: 0.4;
          }
          .cls-10,
          .cls-2,
          .cls-8,
          .cls-9 {
            mix-blend-mode: multiply;
          }
          .cls-3 {
            fill: url(#linear-gradient);
          }
          .cls-4 {
            fill: url(#linear-gradient-2);
          }
          .cls-5 {
            fill: url(#linear-gradient-3);
          }
          .cls-6 {
            fill: url(#linear-gradient-4);
          }
          .cls-7 {
            fill: url(#linear-gradient-5);
          }
          .cls-8 {
            opacity: 0.2;
          }
          .cls-9 {
            opacity: 0.3;
          }
          .cls-11 {
            fill: #ef8a11;
          }
          .cls-12 {
            fill: #ffd112;
          }
          .cls-13 {
            fill: #f2a00f;
          }
          .cls-14 {
            mix-blend-mode: screen;
          }
        </style>
        <linearGradient
          id="linear-gradient"
          x1="189.23"
          y1="-1861.87"
          x2="189.23"
          y2="-1974.71"
          gradientTransform="translate(282.03 -1819.72) rotate(180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.25" stop-color="#f0c95c" />
          <stop offset="0.49" stop-color="#bb701b" />
          <stop offset="0.59" stop-color="#d4922d" />
          <stop offset="1" stop-color="#b85515" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="189.23"
          y1="-1863.76"
          x2="189.23"
          y2="-1972.48"
          gradientTransform="translate(1998.68 -161.62) rotate(-103.28)"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="189.23"
          y1="-1872.04"
          x2="189.23"
          y2="-1954.84"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="16540.29"
          y1="-5624.51"
          x2="16540.29"
          y2="-5710.1"
          gradientTransform="translate(-9219.6 -14702.69) rotate(76.72)"
          xlink:href="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="189.23"
          y1="-1834.3"
          x2="189.23"
          y2="-1910.48"
          xlink:href="#linear-gradient"
        />
      </defs>
      <g class="cls-1">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_7" data-name="Layer 7">
            <image
              class="cls-2"
              width="126"
              height="126"
              transform="translate(30 33)"
              xlink:href="data:image/png;base64,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"
            />
            <circle class="cls-3" cx="92.8" cy="93.87" r="56.42" />
            <circle
              class="cls-4"
              cx="92.8"
              cy="93.87"
              r="54.36"
              transform="translate(-19.87 162.62) rotate(-76.72)"
            />
            <circle class="cls-5" cx="92.8" cy="93.87" r="43.67" />
            <circle
              class="cls-6"
              cx="92.8"
              cy="93.87"
              r="42.79"
              transform="translate(-19.87 162.62) rotate(-76.72)"
            />
            <circle class="cls-7" cx="92.8" cy="93.87" r="38.09" />
            <g class="cls-8">
              <image
                width="186"
                height="186"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAYAAAAZDlfxAAAACXBIWXMAAAsSAAALEgHS3X78AAAWx0lEQVR4Xu2dS6wsW1nHf1/v9+Ocw706QpS3UQcQCHAvoqA40ZkDE02QGBONxhgNIhcJIRhEnhpNNBpjjDGGgRPj0AkoiPfC1RgmIK+r+GJg8Jzd+7332d2fg7W+qlWrqrp733P2qequ75+sVHXv3idnr/Xrf/3Xq0pUFZdr1TWa9wGXaxXkoLsGIQfdNQg56K5ByEF3DUIOumsQctBdg5CD7hqEHHTXIOSguwYhB901CDnorkHIQXcNQg66axBy0F2DkIPuGoQcdNcg5KC7BiEH3TUIOeiuQchBdw1CDrprEHLQXYOQg+4ahBx01yDkoLsGIQfdNQg56K5ByEF3DULr8z7gmq3xs28fAUIwjUWPU0AXPd55w19OcT2QxG8bvZhmAL02o7T9ThvUkxnFvwAPIAe9RQ1gt8G8QbgybjT87LqOnsN9H7iKx7lfAAe/XQ56ogzuHFqDedbxYTu6QT7rmP+OQ98gB50K4G1OvQ5sZqUJ9ocNehvcl0mZBb5DHzVY0FvcexbY29lr++yjii7puUF+QRX6HPxKxBky8IMDfY5752BvUQK+lR27jC4G9Tkl8OfUwW+CfpDADwr0CPks907h3ollKynXjS4P09Gbost5crwAzpJz+5mVQQM/CNAzF5/l3jtZ2aUEvC26LOrobaA/iKObgxvcp5TAt0E/SOBXGvSGmLJBCao5dwr4HnXY8+hyHUd/0OiyqKMbzGeUwJ9SAp9Cn8eaCTBZddhXFvSWmJICnjv3Hs2gtzn6IqDfRHSZ5egG9Bkl7KfACSXwsxx+Zd195UCfE1NSwA3uFPJd6qAb4A8aXZ6Po8+LLm2OfkYJ9ylwxGLAr6y7rxToDS7elMEN6H3gFnXgH2Z0uQlHnxddUkc34I+TckI11qSRpogzqwb7yoCeQD4rpqSA34rnKeTm6Kmzz+uMzgL7upoF/iKd0RT01NFT0I/iscnh0/y+UlFmJUDPIJ8VU/aB2wTIb8fXizp6Hlea4snDVlusaQK+Lbrkjm6wNwGfxpmVijJLD3oD5G0xxSC/Qwm7OXoT6Olk0Sz3flRqgn4W8G3R5Rg4JIB+mLzX5O4rE2WWGvQWyPOYYoAb5HeoOnoOeQq4Qf4o3Ps6yqNNU3Y3aC26mIPb+SEwpoQ+z++1juoyw760oM+API0pBvSdrBj4Fl1mxZQu3HtRzQI+ze25qxvc46Q0uXstyiwr7EsJ+hzI85hyB3iMOugp5BZ30tGU1MX7ribg0zhjsJu7H1I6+hg4oITdgM9HZpYa9vV5H+ibFoDc8vcLYnksHu/EY5rN01EVg7yrDP4gsv9n02I1++Lmyx42k5839T0sptU0fvbtLBvsSwX6gpCnLv44JextTr4sMWURpcDn0DeB3zTRlQ6RNoIOywf70oB+DcjNwR+PZRHIlymmLKJRckyhzcHPS9Pfr9QXoNnrpdFSgH5NyB9PisWXtriyCi7eptzdrQ5nlSYHb4N8On727UszobQUoFO6UTrjaePkNrpiGfxx4NtY3MlXDfBc6d+X5++5eZwWyO31skSY3oO+oJtbDr9uXFl1yE1tUSZ/3SSlBfJ4vhR5vdegJ5Av6uQWVxzyupqiTA59qqalB01lKfJ6r0GnjCyLZPN0KNEhb9esvz1163mAW1mKvN5b0BeMLDnkNr3vkM9WWx2kkaQJ6quG95Yir/cS9IbIsijk7uSLq20o0XJ4CnfbTqcc/F5CDv1t+Dyy5Nm8bf1KOoTokM9XftVs6wMtXM/RpHqn3jn6NSKLFc/kD6a0bjapZ/R0VWRTaXL33qmPAMwbM083TqQ7hQzy9AZDDvlimje6Zas903pvMpYNeurqvXL0Gdm8DXJ38oen/Epq7mwrIc+p3ifmguY7g63RQ1fvGwht2Txdfmsln9avuAr9+9uWQW1X06b6t9K4rKJvrt4bR58zOWRQt1WyO/nDUVNeT3O6uXjq7KnTm7P3ztX7BMSsySHbNWTHdMd+nslbl5a6FtK8+Fi/sip7KDso2yibKBsoa+PP98fVe+PoqjrL0QvIpQq+R5abUduw4y6wp+XOo7143KXcibRJD129F6AffO6nZ7lI6uS7Wr7nIyw3q7b+UlPZpdh6p2eEdrwktEcvYO8F6Kp6nUq14pHlZmWmsUGAdZsAr5lOm6unt8u4uvfM2yaPvfETnc+Y9gP0aRJbJDi6tDuHnXtkuXm1XWkb20aDq2+h/TOgzkH/v8/+VKxMWRfYRIObaxXqNjd3yG9eTYMEdu+b9HxLi3PN26bz+NI56Dq12KIbmlSkJBVIUamyhdSGEnvhGCus+iCBsgNaGI/Ws3olVn7rMz85+fY3/1Wn8aUHoE9HIHk+39bMLULRcC7u5o9YpavrbFdPztM26tyMOgX9fz/5E8EtRCuQU6+89L1eVeBA1DT0m4Pd1E7raD/iS6egT6fTfMp5duWJbAOb4sOJXUiANbW2Ut0ktNms0htD6hb0yTSfmNiUvLKkXnkaok7nlTcwxbbKrr5aGpK2uTqsffNvf3z0wh/9m85yeqeg66Tm6JtaVlAb7O7m3anaXtru5tozV+8U9Mlkkjr6Rowk64TKWQfZKM+L4xrikHek0F5aXoFnF82NqbOc3hno3/jrH6vGFmmILfUS3UE6dYeBawRqrm4GlJtR9T0dsKPrZBIvgxIug9ISW6rFY0v3SieQ2sDOrszdt1lnoGcdUauQPLasI/2qMFdlqLFsG03bSXOXH66jT6sd0cUugSGfd1phLgBGMY5cq+2+9om3jl75tk91MvLSJehzHL2x8tzR+6Gm+JK3XfaedurqHYJuGX1Wkfw9h7wfaoovG3GMvdmoOp4h7Q70q8LRraxnr9eQGvydOYKrpqpR6TzT6rb9ugO9zOhzi5Tn7uj90UgXaLuyaKft1yHokxHhGz4iDIwX58lRCBUqIJ1VkqtREuEtygLgD8/R4/R/AbbWIR9Rf8/VH+XRc5HSmVl1BnrM6AFiKd2bdsg7qyRXqxZpsxHavVl1B3oYdZlVSU1RxtUvLdJmvTCrDkGfzqsQd/T+a5E264VZdQn6vI+4+q8WsNUd3TSddDJv4Hq4WiSqDNvRdarzPuJaCfWjnTsE3aPLCsieeZQe8/fyn3ei7kDXzv5m18PTFJ0Ldv7zTtQZ6Ey1/ONlISeY0mFnxtWoRdos/zJ0ou5AR8s/Xuc5gXRaSa5WxXbRhjZzRzfNq5DkvPhSrDX/U66OtJijV9/rRJ2BLjK3QnpTSa5GTWl+uvQEmGj+nnb7wN3OQEekArH0+LLnapQyA25Bq6ALEzo0q85AH0m9ompFau9N8Q5pX1RzdNH0tTS1aWdm1RnoMpK8osonD9cBDxXZoSO4atJaPLGiLe932H6dgT5ak/mOXilijuAd0u41BSaC2qPR08ekt71n7deJugN9NJrZmWkpnTmCq6JoUpKCnUOev9dp+3UGuowKR69UjLQ7glWW5/TuZSa1kKNrdPTXvefLQ3R0uVZlUV7+OnMFF9AMeZOjF+fSg3brDHSRRkevwy6Nju45vTst1m7NV+LO1Bnor3nqS9MvfPz7zBnCM+SleJZ8WzFX73Sj7cC1lFfizkAHECniy0KXQEp36LTSBqy0veaZkpVhOzoUywCqrj6/WMV1ujVroJrbXtp+Fe7UnDoFnWaHuKBeWXnFbeI5/VErb6sL4DwWO7+Q6nuFMb3qnV8crqNTdwiroAuqFZieX1KC7q7+6DTXzUOR3rk5dAzJq975xSnKBOUK5RLlAuU8lovsaOeX8fMTlLCk38tNF2un+1Tb6YK8ndBz0AvQS9Ar0AlhvXqn6trRIVRl/ZKo1UuiVl3+kvLuu+7qN6+8jdqutheU8aVXjt456Bq21F03vuwQ4osNNbpuTnn7XABn1SJ2fopyplk+f/VT3eZz6AHoaOkWWq3IU2CXWqVyRgm6u/rNawE319ycUjfvHHLoAeivfveXpl/4yPfmjl6HWyvwm2O4q9+smq62ZZtIxdVP43nFzelBbIEegA6g0zkV2lwqj+DGXf0m1NR/MsMx84lF7Tw4ugRHf817/tUdvVC4yUtThZ4QYspOcn6i4dgEOjjsD0szzUdKJ0/Np4wtHe8RzdUL0F/z3i9P/+WD39NUqac0w36KsgNsU3mitEP+kFSHXArjOQFONR5B7b3exhboCehAzdU1vUxqBfgU/CbQPcI8mJpmQM9iGxwjcgwURcLR8nmlI/ra93W3/jxXb4B47fu+MlVlosp9nXLJlHOmnDHlBOUI5bihnKCcxQmLSzReMsMEx7xJEC/NRalODp0T6vgE5YSpnjLV4qiqJ6p6pqoXqnqpqleqOtGe3XOwP44OaMAzH8qyCHMMbINuhSNbpDldGzukvfkiL4mqbi6VzucxVN0cOEYzN4+d0Ne9/yu9cXPoGeiv+82vTP/5/d/dNDmxObNoiC5a3o87lcO+mOoTQ8qZGOTCMWgK+RFlNrfIEpZmhGtDr9Qr0AFUa66ewx7cXCvuno6+mLN7Vl9ceS63K+mJBic/RDlEOAIOCZCn2dw6ofeByes/8NVeuTn0EPTXf+Cr03963yvNWdYIlb6OPXJbSyfXqrNbh3SN8ilo3jmdr7a4ckLobB6CGtx2PEomiEo379lIS6regQ4VV69cRgn/34b4ogH08jHdKeQ+vt6uupMrZwinMY8fKYyBMcIYZUyA/Rj0RFI3j9n89b/1td65OfQU9Dd88GvTZ9/7irQB0mfNbwDrGo/22nI61WFG75y2qzWuEEA+EjjAQEfGZJFFpTZB1Es3h56CDg1ZvQR9nRTw4OT2eo3w2G5Rg1y9c9qgPK6cg3U85Tjm8QMNoN9DOEB1HGKMHCOxE6rVCaI3/HY/3Rx6DPoTH/r69PPveQWE+JJm7sTd1Z4/LxHoqoOX/jKlmuOHnNtb44pGJ0cYi3IAEiEPkUXDyMtJHI25iLuJ7tPxnXIXUW9BB3jiw1+ffv43Xj6hXMIrlB3OteLcvgRlJxRFc9BtSsRGZ2B4sLfFlVMJmfyQ6OIKdxG9Kyr3gAOEQzTGFuFM4Ry0GFJ84kNf762bQ89Bh1rHtAS9CvwIEFVtc3SDfIqyGfO9aSiwF5BLEleI4+QaRlbGiByIche4CxwoOhaRMDOdRhYphxP7DjksAehPfvS56efe/fL0LcvdQsjiI9LZ5vRUK2dTtOLsqVYZdvubi1EstVEssY6nWMfzAPRbCndF5B4anFxVj0XkNP5O6IBqyOVPfLj/kMMSgA4R9qcK2C8BUXsMt9YdPACuBnZwMq09bmQIud1cvBZXihnPME4+VrgnIndR7iIcqDIWKUZZThQ9EyRsTpf+7AVdVEsBOsCTH3tu+sxTLwOLMJqMlRvgUNp4vD9AEX00e9SIOV34+arl9tzFr2LUKOKK2ownjEW4h3KgqDn5GNFxnBE9RuJeUOFcklGWZXFzCLl23md6pWfe9TIbS98kLAXYAXYU9lDdB26hvAC4o+H4OKp3gDsotxX2gT1gl8qadk2GKJfa3TMXL+6zYmvKT7EZT2EM3EPkQITY6ZQDEY4QDhE5ltj5DL8vlxK+NEsFOSyRoycqnSqOsmROTnw5jfFFUa40jA5cxpECm+S4Iozo2CrICelSguUCvu7icCnlxuVkMogjFTkgxJMDVO8pMhZhDHqIrVLUBPIldXLT0jk6wDPvepmNp69ja15Ut4EdlF1V9oF9VG+j3NHg5ndAb6Pciq5+Gy3cPW7N03SBWLqkoM/Al4BLZdnEJUh6a4oTxNaucBTcXMYI90QYI3IYnfwYkRNzchE5j7HnCpHJkx9ZPshhSUGHCHsAcV2VDdBNlC1gR5U9VHeBfVVuo9wGvYNyS5XbwD7oLZRb4ZxdtV1LWqyGLIHvp8OnDl5x8TgyciGli9tS2yOQI4RDsfUrImORsH5FREIeFzkTCSMsInJJuEf95MmPPreUkMMSgw7wzK8HZ1dlDXSdsLJxW5UdVIO7B2ffR7kdIb8Vs3zI61VXj7ldbWNHujIyXQZcn4V9NDK489GU9H6IFyB2KwqD3Nz8GOEwwh6m9IOTG+AnAXC5EOEc4VJErpDlhhyWHHQIsKsioGuEhV2bqmyhuo2yo8ouqnsF1Kq3CU4f3FzZBzXQ91SL/ah2p4FZDv8oXL4J7hbAy536koIuYtn8uOhoUgB+jMhpBPwsAC6XIlwiXInI5MmPLTfksAKgm55+50tDlFHWNcSYTVW2o7MH4NE9lP2Y4W9HZ98PPwugE+JLsvm6snVvU7Xi8E2x5kHBT8FOo0kRTySsL0kBvwQpO51SbIg4RTgpxsxDNDmU8vxEyqhyHp38EpH7ImF05Y0f/7elhxxWCHSAp38twK4hxmyosonqFlrGGQ3xZA/V/Vp0CV+GMFxZDj0a5NtoxdnbYk1TvGmDP4c6d+3UuW3CJx0Xt7HxwtGluHuW2MznKXAiErfAiRyLcFLN4nIeAb8MgMtEhMkbf2c1IIcVAx3g6Xe8dKQhxqypso5W3H2riCaqe9HJb1E4ulaji5K6eYgw0dE1bPZoizNNDi/UlUOeO3jaybwfJmvisz2bQJc8uojl81OEI7EYI8XPL2RURJWr6OQTRPT7f3d1IIcVBB3gH9/xkhGKqLKG6kYAnk1UA/CwhWpwbY2TR+huEWHS6KJsad451WLCqhtHl2o2F6QYaSFEF4P9BOQkRhnraJ4h8dbOlsVHchUBn7zp9/59pQA3rSTops/+6ktGqIZRmeDuMc6wqYRIE6BWiyq7JLCr5XNt6JTGGKO2l/UGHV2qcSWF3gA34G32sxh1ic59Fl38ApFzIHY25UqE+4xkIoK+6fe/sZKQw4qDDvDZX3lxGJUJ7r6mygaq66qFO2+rFkAn+VwLR6e884BtyI6Orpvo3OiyqKO3R5fiWatyCcXTte1xlbZnM46di81mlnCHL0DoaJJ2NkMW/4E/+I+VBdy08qCb/uGXXzxC1eJMAJ6Q4VPogS2NIzUkt9bQIqNrvTOqzdFFrxFdpC26SGN0KdawSOno58Qd/CJxBMYWYcWOJmIjNgFwRPQH/3D1IYcBgW76zC99Vwk8SYa3W2mksaaEPDq+lnCXHVPbqB3/vYcQXaQEXUrIrQNajp+HRVY2RR/G0aXI7Ob45t73ESZCAPzNf/SfgwDcNDjQTZ/+xe+MS3yLDL8GbKhqcOvS5Tc1QF7rjGqro+sDdEal0dGTuJKAziXIReHa8Rhd+4q4btw6mgj6lj/+r0EBbhos6KZP/8KLLMPH5QS6Rnn7jLiOpogsqYsXQ43AeoR7LYH+QRz9CphE6M3Nwxa4fBw9uHqZ48PnDOwJMBVB3/In/z1IwE2DBz3V3//8i0Zx32lweCXeZUDLW2rEYwm65isdi+ii1wBdmjqjxWrEcuxcEvAx5zbXjr8jMEVEf+hPhw13Kge9QX/3c98R7iigsUOphVuvQYQ/rJhM4S8g19gZRSuQz44uYZ/UVFo7oyGKSPVLEJwbVCT8Wz/8Z//jcDfIQV9An/rZF8Y8H6DVALFl8cqtN7R8/fyii3UYc6CR0q3D56aAvvXPv+lgLyAH/Xnqkz/zwhHlBu0CZm128vmOnji7ZK/Dz0V/5C8c6ucrB901CDW5jMu1cnLQXYOQg+4ahBx01yDkoLsGIQfdNQg56K5ByEF3DUIOumsQctBdg5CD7hqEHHTXIOSguwYhB901CDnorkHIQXcNQg66axBy0F2DkIPuGoQcdNcg5KC7BiEH3TUIOeiuQchBdw1CDrprEHLQXYOQg+4ahBx01yDkoLsGof8HaqxrrK8tB9gAAAAASUVORK5CYII="
              />
            </g>
            <image
              class="cls-9"
              width="65"
              height="64"
              transform="translate(59 60)"
              xlink:href="data:image/png;base64,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"
            />
            <g class="cls-10">
              <path
                class="cls-11"
                d="M68,112c-.54,1.53,17.11,1.7,19.48-.42S90.65,99,91.08,96,92.4,83.18,93.22,82.5s3.45.51,6.06,4.29c1.6,2.32,5.69,9.09,3.31,10.19s-8.48.8-10.16,1.27-.4,2.08,2.22,4.35c3.89,3.37,19.55,11.41,20,9.54s-6.78-22.83-10.16-29.79S95.82,62.89,88.71,70.71,69.06,109.09,68,112Z"
              />
              <path
                class="cls-12"
                d="M114.62,112.14c.42-1.86-6.78-22.83-10.16-29.79S95.82,62.89,88.71,70.71,69.06,109.09,68,112v0c8-1.34,15.77-24.16,22.54-28.52A6.63,6.63,0,0,1,93.4,82.4a1.35,1.35,0,0,1,.81,0h0c1.22.27,3.15,1.64,5.07,4.42,1.6,2.32,5.69,9.09,3.31,10.19s-8.48.8-10.16,1.27-.4,2.08,2.22,4.35C98.54,106,114.2,114,114.62,112.14Z"
              />
              <path
                class="cls-13"
                d="M102.32,78a32.75,32.75,0,0,1,3,9.26c.51,4.68-.31,9.3-3.67,10.09h0c-2.76.72-7.74.54-9.23,1-1.68.48-.4,2.08,2.22,4.35,3.89,3.37,19.55,11.41,20,9.54s-6.78-22.83-10.16-29.79C103.81,81,103.1,79.5,102.32,78Z"
              />
            </g>
            <g class="cls-14">
              <path
                class="cls-11"
                d="M68,112c-.54,1.53,17.11,1.7,19.48-.42S90.65,99,91.08,96,92.4,83.18,93.22,82.5s3.45.51,6.06,4.29c1.6,2.32,5.69,9.09,3.31,10.19s-8.48.8-10.16,1.27-.4,2.08,2.22,4.35c3.89,3.37,19.55,11.41,20,9.54s-6.78-22.83-10.16-29.79S95.82,62.89,88.71,70.71,69.06,109.09,68,112Z"
              />
              <path
                class="cls-12"
                d="M114.62,112.14c.42-1.86-6.78-22.83-10.16-29.79S95.82,62.89,88.71,70.71,69.06,109.09,68,112v0c8-1.34,15.77-24.16,22.54-28.52A6.63,6.63,0,0,1,93.4,82.4a1.35,1.35,0,0,1,.81,0h0c1.22.27,3.15,1.64,5.07,4.42,1.6,2.32,5.69,9.09,3.31,10.19s-8.48.8-10.16,1.27-.4,2.08,2.22,4.35C98.54,106,114.2,114,114.62,112.14Z"
              />
              <path
                class="cls-13"
                d="M102.32,78a32.75,32.75,0,0,1,3,9.26c.51,4.68-.31,9.3-3.67,10.09h0c-2.76.72-7.74.54-9.23,1-1.68.48-.4,2.08,2.22,4.35,3.89,3.37,19.55,11.41,20,9.54s-6.78-22.83-10.16-29.79C103.81,81,103.1,79.5,102.32,78Z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReady: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isReady = true;
    }, 1000);
  },
};
</script>

<style scoped>
.logo {
  height: auto;
  display: inline-block;
  vertical-align: middle;
  width: 43px;
}

.logo svg {
  width: 100%;
  height: auto;
  max-height: 12em;
  margin: 0 auto;
}

.logo svg polygon {
  transform: translateY(-100%);
  transition-duration: 2s;
}

.logo svg path {
  fill: transparent;
  transition-delay: 0.6s;
  transition-duration: 1s;
}

.logo.ready svg polygon {
  transform: translateY(0);
  fill: #fff;
}

.logo.ready svg path {
  stroke: transparent;
  stroke-width: 0;
  fill: #fff;
}
</style>
