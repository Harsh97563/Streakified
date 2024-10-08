import React from 'react'
import Image from 'next/image';
import * as motion from "framer-motion/client";

function Logo() {

  return (
    <motion.div className='flex items-start mr-2'
    animate= {{
      x: [-200, 0],
      transition: {
        duration: 1,
        delay: 0.5
      }
    }}
    >
        <svg width="120" height="48" viewBox="0 0 71 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.336 11.408C2.8 11.408 2.296 11.344 1.824 11.216C1.352 11.088 0.94 10.908 0.588 10.676C0.548 10.484 0.508 10.296 0.468 10.112C0.436 9.928 0.4 9.716 0.36 9.476C0.328 9.236 0.288 8.94 0.24 8.588V8.552C0.256 8.48 0.312 8.412 0.408 8.348C0.688 8.532 0.944 8.668 1.176 8.756C1.408 8.844 1.6 8.888 1.752 8.888H2.112L2.316 8.9C2.5 8.9 2.672 8.872 2.832 8.816C3.04 8.736 3.156 8.632 3.18 8.504C3.212 8.376 3.164 8.256 3.036 8.144C2.908 8.032 2.712 7.96 2.448 7.928C2.08 7.88 1.728 7.74 1.392 7.508C1.056 7.276 0.78 6.984 0.564 6.632C0.356 6.28 0.252 5.904 0.252 5.504C0.252 4.792 0.448 4.24 0.84 3.848C1.232 3.448 1.732 3.16 2.34 2.984C2.876 2.832 3.468 2.756 4.116 2.756C4.3 2.756 4.504 2.768 4.728 2.792C4.952 2.808 5.232 2.84 5.568 2.888C5.64 2.928 5.748 2.952 5.892 2.96L6.204 3.032C6.34 3.064 6.452 3.084 6.54 3.092C6.636 3.092 6.712 3.092 6.768 3.092C6.776 3.092 6.78 3.096 6.78 3.104C6.788 3.104 6.796 3.104 6.804 3.104C6.82 3.112 6.836 3.124 6.852 3.14C6.868 3.18 6.884 3.208 6.9 3.224C6.916 3.232 6.928 3.236 6.936 3.236H6.96L6.984 3.5C6.984 3.572 6.988 3.64 6.996 3.704C7.004 3.76 7.012 3.816 7.02 3.872C7.036 3.976 7.048 4.084 7.056 4.196C7.064 4.3 7.068 4.408 7.068 4.52C7.068 4.912 6.988 5.168 6.828 5.288L5.784 5.156H5.616C5.56 5.156 5.456 5.152 5.304 5.144C5.152 5.136 4.988 5.136 4.812 5.144C4.644 5.144 4.496 5.164 4.368 5.204C4.248 5.236 4.188 5.292 4.188 5.372C4.188 5.468 4.216 5.564 4.272 5.66C4.336 5.748 4.432 5.824 4.56 5.888C4.616 5.92 4.668 5.952 4.716 5.984C4.764 6.016 4.816 6.04 4.872 6.056C4.936 6.072 4.988 6.088 5.028 6.104C5.068 6.12 5.092 6.132 5.1 6.14C5.38 6.236 5.636 6.356 5.868 6.5C6.108 6.636 6.336 6.812 6.552 7.028C6.784 7.252 6.94 7.52 7.02 7.832C7.1 8.136 7.132 8.436 7.116 8.732C7.044 9.332 6.832 9.848 6.48 10.28C6.28 10.48 6.064 10.652 5.832 10.796C5.6 10.932 5.348 11.048 5.076 11.144C4.596 11.32 4.016 11.408 3.336 11.408ZM11.4514 11.252C11.1554 11.268 10.8994 11.28 10.6834 11.288C10.4754 11.304 10.2754 11.296 10.0834 11.264C9.89938 11.24 9.69938 11.184 9.48338 11.096C8.97938 10.88 8.61138 10.584 8.37938 10.208C8.15538 9.832 8.03538 9.316 8.01938 8.66H8.03138C8.03938 8.38 8.04338 8.092 8.04338 7.796C8.05138 7.492 8.05938 7.216 8.06738 6.968C8.07538 6.712 8.07938 6.532 8.07938 6.428H7.67138C7.55138 6.428 7.47138 6.36 7.43138 6.224C7.39938 6.08 7.38338 5.896 7.38338 5.672C7.39138 5.448 7.39538 5.212 7.39538 4.964V4.808C7.41138 4.744 7.41938 4.692 7.41938 4.652C7.41938 4.612 7.41938 4.576 7.41938 4.544V4.304L7.43138 4.208L7.47938 4.16L7.57538 4.172H7.89938C8.01938 4.172 8.07538 4.172 8.06738 4.172C8.05938 4.172 8.02738 4.172 7.97138 4.172C7.92338 4.164 7.88738 4.16 7.86338 4.16H8.06738L8.10338 2.72C8.11938 2.68 8.11938 2.632 8.10338 2.576C8.08738 2.52 8.09138 2.472 8.11538 2.432C8.14738 2.384 8.23138 2.36 8.36738 2.36H9.75938C9.81538 2.368 9.87938 2.372 9.95138 2.372C10.0234 2.372 10.1074 2.372 10.2034 2.372H10.5034C10.5434 2.356 10.5714 2.348 10.5874 2.348C10.6114 2.348 10.6354 2.348 10.6594 2.348C10.6914 2.34 10.7194 2.336 10.7434 2.336C10.7674 2.328 10.7914 2.324 10.8154 2.324C11.0554 2.316 11.1754 2.492 11.1754 2.852C11.1754 3.084 11.1674 3.312 11.1514 3.536C11.1354 3.752 11.1194 3.952 11.1034 4.136H11.5234C11.5634 4.136 11.6074 4.136 11.6554 4.136C11.7034 4.136 11.7434 4.14 11.7754 4.148L12.0634 4.16L12.0994 4.184C12.1154 4.192 12.1234 4.204 12.1234 4.22V6.176C12.1234 6.232 12.0874 6.288 12.0154 6.344C11.9514 6.392 11.8714 6.424 11.7754 6.44C11.6474 6.408 11.5714 6.388 11.5474 6.38C11.5234 6.364 11.4914 6.356 11.4514 6.356H11.0434V6.74C11.0434 7.212 11.0434 7.54 11.0434 7.724C11.0434 7.908 11.0474 8.008 11.0554 8.024V8.36H11.0674C11.0994 8.704 11.1714 8.92 11.2834 9.008C11.4034 9.088 11.6394 9.1 11.9914 9.044C12.1034 9.084 12.1594 9.24 12.1594 9.512C12.1594 9.552 12.1594 9.6 12.1594 9.656C12.1594 9.712 12.1594 9.812 12.1594 9.956C12.1674 10.1 12.1754 10.336 12.1834 10.664C12.1674 10.712 12.1634 10.784 12.1714 10.88L12.1594 11.06C12.1274 11.06 12.1034 11.068 12.0874 11.084L12.0274 11.156C12.0114 11.172 11.9994 11.18 11.9914 11.18C11.9594 11.18 11.9154 11.184 11.8594 11.192C11.8034 11.208 11.7314 11.224 11.6434 11.24L11.4514 11.252ZM14.5481 11.18C14.1481 11.18 13.8361 11.168 13.6121 11.144C13.3881 11.12 13.1921 11.08 13.0241 11.024C12.9761 11.024 12.9441 11.004 12.9281 10.964C12.8961 10.892 12.8801 10.812 12.8801 10.724L12.7481 8.696C12.7321 8.472 12.7201 8.264 12.7121 8.072C12.7041 7.88 12.6961 7.672 12.6881 7.448C12.6881 7.216 12.6881 6.944 12.6881 6.632V6.284L12.7001 5.78L12.7241 5.18L12.7481 4.736C12.7481 4.6 12.7481 4.516 12.7481 4.484C12.7481 4.444 12.7521 4.412 12.7601 4.388C12.7601 4.364 12.7761 4.352 12.8081 4.352C12.8801 4.352 12.9521 4.336 13.0241 4.304C13.0401 4.304 13.0561 4.304 13.0721 4.304C13.0881 4.304 13.1121 4.3 13.1441 4.292C13.1601 4.292 13.1801 4.292 13.2041 4.292C13.2361 4.292 13.2601 4.296 13.2761 4.304H14.9681C15.0881 4.304 15.1681 4.304 15.2081 4.304C15.2481 4.304 15.2841 4.308 15.3161 4.316L15.6881 4.328C15.7841 4.336 15.8521 4.344 15.8921 4.352C15.9401 4.36 15.9761 4.388 16.0001 4.436L16.0961 4.772V5.564C16.2881 5.244 16.6361 4.908 17.1401 4.556C17.3481 4.404 17.5521 4.312 17.7521 4.28C17.9521 4.248 18.1201 4.216 18.2561 4.184C18.3521 4.16 18.4321 4.176 18.4961 4.232C18.5601 4.28 18.5921 4.356 18.5921 4.46C18.5921 5.46 18.5681 6.16 18.5201 6.56C18.4721 6.952 18.3841 7.144 18.2561 7.136C18.1121 7.128 17.9561 7.108 17.7881 7.076C17.6281 7.036 17.4401 7.016 17.2241 7.016C16.8961 7.016 16.6201 7.104 16.3961 7.28C16.1801 7.448 16.0721 7.66 16.0721 7.916V10.916C16.0721 10.956 16.0641 10.98 16.0481 10.988C16.0401 10.996 16.0361 11.016 16.0361 11.048C16.0281 11.08 16.0081 11.096 15.9761 11.096C15.9841 11.096 15.9721 11.104 15.9401 11.12L15.8801 11.144C15.5681 11.144 15.2721 11.156 14.9921 11.18H14.5481ZM22.2756 3.872C22.3076 3.872 22.3436 3.876 22.3836 3.884C22.4236 3.884 22.4716 3.888 22.5276 3.896C22.5436 3.896 22.5716 3.9 22.6116 3.908C22.6516 3.908 22.6956 3.908 22.7436 3.908C22.9116 3.908 23.2196 3.976 23.6676 4.112H23.7396C23.7956 4.112 23.8396 4.124 23.8716 4.148C23.8796 4.156 23.8876 4.168 23.8956 4.184C23.9036 4.192 23.9116 4.196 23.9196 4.196C23.9596 4.196 23.9836 4.208 23.9916 4.232L24.2196 4.424C24.6116 4.76 24.9076 5.22 25.1076 5.804C25.2916 6.34 25.3836 6.9 25.3836 7.484L25.2876 7.712L22.0716 7.772L21.7236 7.784L21.7356 8.096L21.7836 8.384L21.8916 8.672L22.2036 8.948C22.2916 9.02 22.4156 9.08 22.5756 9.128C22.7436 9.176 22.9156 9.2 23.0916 9.2H23.1516C23.2876 9.2 23.4556 9.172 23.6556 9.116C23.8556 9.052 24.0676 8.992 24.2916 8.936L24.9636 8.768L25.1076 8.948L25.3236 10.472L25.1916 10.688C24.8236 10.864 24.4916 11 24.1956 11.096C23.8996 11.192 23.6236 11.256 23.3676 11.288C23.1436 11.312 22.9476 11.332 22.7796 11.348C22.6196 11.372 22.4676 11.384 22.3236 11.384C22.0836 11.384 21.8676 11.36 21.6756 11.312C21.4836 11.264 21.2836 11.228 21.0756 11.204C20.7796 11.172 20.4996 11.072 20.2356 10.904C19.6756 10.472 19.2636 9.996 18.9996 9.476C18.7436 8.948 18.6076 8.32 18.5916 7.592C18.5756 6.768 18.7356 6.048 19.0716 5.432L19.1316 5.228C19.1636 5.212 19.1796 5.2 19.1796 5.192C19.1876 5.176 19.1956 5.168 19.2036 5.168L19.2276 5.12L19.2996 5.072C19.5796 4.544 20.0316 4.184 20.6556 3.992C21.0316 3.912 21.5716 3.872 22.2756 3.872ZM22.2756 5.324C22.2516 5.324 22.2236 5.328 22.1916 5.336C22.1596 5.336 22.1356 5.356 22.1196 5.396C22.1036 5.444 22.0676 5.476 22.0116 5.492C21.9556 5.508 21.9156 5.608 21.8916 5.792C21.8676 5.992 21.8436 6.148 21.8196 6.26C21.8036 6.372 21.8356 6.428 21.9156 6.428L22.7076 6.416L22.6716 6.056L22.6356 5.828L22.5876 5.576C22.5876 5.544 22.5796 5.52 22.5636 5.504C22.5556 5.488 22.5476 5.464 22.5396 5.432L22.4196 5.348C22.3716 5.332 22.3236 5.324 22.2756 5.324ZM27.8632 11.336C27.1112 11.368 26.5472 11.212 26.1712 10.868C25.7952 10.516 25.5912 9.964 25.5592 9.212C25.5512 8.892 25.5792 8.636 25.6432 8.444C25.7152 8.252 25.8632 8.028 26.0872 7.772C26.3272 7.484 26.5992 7.28 26.9032 7.16C27.2072 7.032 27.6152 6.964 28.1272 6.956C28.3272 6.948 28.4992 6.944 28.6432 6.944C28.7952 6.936 28.9112 6.936 28.9912 6.944C29.2232 6.952 29.4032 6.952 29.5312 6.944C29.5072 6.696 29.4272 6.52 29.2912 6.416C29.2112 6.352 29.0992 6.308 28.9552 6.284C28.8112 6.26 28.6032 6.244 28.3312 6.236H27.3712C27.2912 6.236 27.2472 6.24 27.2392 6.248C27.2392 6.248 27.2032 6.248 27.1312 6.248H27.0352L26.3272 6.332C26.2152 6.292 26.1592 6.136 26.1592 5.864C26.1592 5.816 26.1592 5.768 26.1592 5.72C26.1592 5.664 26.1592 5.572 26.1592 5.444C26.1592 5.308 26.1512 5.096 26.1352 4.808C26.1512 4.752 26.1552 4.68 26.1472 4.592L26.1592 4.412C26.1912 4.412 26.2152 4.404 26.2312 4.388L26.2912 4.316C26.2992 4.3 26.3112 4.292 26.3272 4.292C26.3592 4.292 26.4032 4.288 26.4592 4.28C26.5232 4.264 26.5952 4.248 26.6752 4.232L26.9392 4.184C27.0032 4.168 27.0512 4.16 27.0832 4.16C27.3072 4.112 27.4552 4.08 27.5272 4.064C27.6072 4.048 27.7072 4.036 27.8272 4.028C28.2832 4.004 28.7312 4 29.1712 4.016C29.6112 4.024 30.0032 4.048 30.3472 4.088C30.6992 4.128 30.9552 4.184 31.1152 4.256C31.6112 4.456 31.9752 4.748 32.2072 5.132C32.4392 5.508 32.5632 6.028 32.5792 6.692L32.6272 8.444C32.6352 8.668 32.6432 8.868 32.6512 9.044C32.6592 9.212 32.6632 9.328 32.6632 9.392L32.6752 9.656C32.6432 9.816 32.6192 9.956 32.6032 10.076C32.5952 10.188 32.5952 10.312 32.6032 10.448C32.6192 10.688 32.6072 10.856 32.5672 10.952C32.5352 11.04 32.4672 11.088 32.3632 11.096L30.4192 11.156C30.3552 11.14 30.2032 11.136 29.9632 11.144C29.8752 11.152 29.7992 11.144 29.7352 11.12C29.6712 11.104 29.6072 11.084 29.5432 11.06C29.4312 11.012 29.3752 10.892 29.3752 10.7V10.556C29.3752 10.54 29.3792 10.528 29.3872 10.52V10.484C29.3712 10.468 29.3592 10.46 29.3512 10.46C29.1912 10.708 28.9712 10.912 28.6912 11.072C28.4192 11.232 28.1432 11.32 27.8632 11.336ZM28.7752 9.416C29.1352 9.416 29.3672 9.224 29.4712 8.84L29.4832 8.612C29.4912 8.452 29.4432 8.304 29.3392 8.168C29.2352 8.024 29.1232 7.956 29.0032 7.964C28.8512 7.972 28.7192 8.04 28.6072 8.168C28.5032 8.296 28.4592 8.44 28.4752 8.6L28.5232 9.056C28.5872 9.296 28.6712 9.416 28.7752 9.416ZM41.1832 9.692C41.2472 9.772 41.2792 9.844 41.2792 9.908C41.2792 9.988 41.2552 10.052 41.2072 10.1C41.1432 10.156 41.0952 10.204 41.0632 10.244C41.0312 10.284 40.9912 10.316 40.9432 10.34C40.8392 10.348 40.7592 10.384 40.7032 10.448C40.6552 10.512 40.5872 10.564 40.4992 10.604C40.4672 10.612 40.3992 10.648 40.2952 10.712C40.1912 10.776 40.0912 10.836 39.9952 10.892C39.9072 10.94 39.8672 10.952 39.8752 10.928L39.6592 11.108C39.5952 11.148 39.5472 11.184 39.5152 11.216C39.4912 11.256 39.4232 11.296 39.3112 11.336C39.1752 11.44 39.0352 11.42 38.8912 11.276C38.8832 11.26 38.8472 11.212 38.7832 11.132C38.7272 11.052 38.6672 10.972 38.6032 10.892C38.5472 10.804 38.5072 10.756 38.4832 10.748L38.3512 10.628C38.3112 10.572 38.2912 10.544 38.2912 10.544L37.3552 9.356C37.3312 9.308 37.3032 9.268 37.2712 9.236C37.2472 9.196 37.2232 9.168 37.1992 9.152C37.1752 9.128 37.1552 9.108 37.1392 9.092L36.8872 8.684C36.8552 8.66 36.8312 8.648 36.8152 8.648L36.4792 8.984L36.4432 9.896V10.244C36.4432 10.324 36.4392 10.364 36.4312 10.364C36.4312 10.364 36.4312 10.376 36.4312 10.4C36.4232 10.424 36.4152 10.448 36.4072 10.472C36.4072 10.496 36.4072 10.552 36.4072 10.64V10.94C36.4072 11.02 36.3872 11.064 36.3472 11.072C36.3232 11.096 36.2792 11.104 36.2152 11.096C36.1352 11.104 36.0432 11.108 35.9392 11.108C35.8352 11.108 35.6912 11.108 35.5072 11.108H34.2112C34.1072 11.108 34.0512 11.104 34.0432 11.096H33.9832L33.5512 11.048L33.5152 10.952V10.196C33.5072 10.14 33.4992 10.068 33.4912 9.98C33.4912 9.892 33.4912 9.812 33.4912 9.74L33.4672 8.804C33.4592 8.676 33.4512 8.548 33.4432 8.42C33.4432 8.284 33.4352 8.156 33.4192 8.036V7.772C33.4192 7.66 33.4152 7.564 33.4072 7.484C33.3992 7.396 33.3952 7.324 33.3952 7.268V7.172C33.4112 7.14 33.4192 7.096 33.4192 7.04C33.4192 6.984 33.4192 6.868 33.4192 6.692V6.476C33.4192 6.428 33.4192 6.4 33.4192 6.392C33.4192 6.376 33.4152 6.364 33.4072 6.356C33.3992 6.348 33.3952 6.328 33.3952 6.296C33.3952 6.232 33.3992 6.188 33.4072 6.164C33.4152 6.148 33.4192 6.072 33.4192 5.936C33.4192 5.8 33.4192 5.576 33.4192 5.264C33.4192 4.944 33.4192 4.512 33.4192 3.968V2.264C33.4112 2.224 33.4032 2.188 33.3952 2.156C33.3952 2.124 33.3952 2.092 33.3952 2.06V1.952C33.3712 1.808 33.4432 1.716 33.6112 1.676C33.7072 1.66 33.7832 1.652 33.8392 1.652H36.3832C36.4712 1.652 36.5272 1.708 36.5512 1.82C36.5592 1.828 36.5632 1.84 36.5632 1.856C36.5632 1.864 36.5632 1.896 36.5632 1.952V2.108C36.5632 2.148 36.5752 2.192 36.5992 2.24C36.6312 2.288 36.6632 2.38 36.6952 2.516C36.7272 2.652 36.7432 2.88 36.7432 3.2C36.7512 3.408 36.7472 3.668 36.7312 3.98C36.7152 4.284 36.6872 4.656 36.6472 5.096L36.6232 5.36C36.6152 5.4 36.6112 5.468 36.6112 5.564C36.6112 5.66 36.6112 5.828 36.6112 6.068C36.6512 6.02 36.6992 5.96 36.7552 5.888C36.8192 5.808 36.8872 5.728 36.9592 5.648C36.9752 5.648 37.0592 5.588 37.2112 5.468C37.3632 5.34 37.5392 5.188 37.7392 5.012C38.0832 4.708 38.3632 4.46 38.5792 4.268C38.7952 4.068 39.0032 3.884 39.2032 3.716C39.2592 3.684 39.3192 3.68 39.3832 3.704C39.4472 3.72 39.5112 3.752 39.5752 3.8C39.6552 3.856 39.7272 3.92 39.7912 3.992C39.8552 4.056 39.9032 4.108 39.9352 4.148C40.0152 4.228 40.0592 4.288 40.0672 4.328C40.0832 4.36 40.0952 4.388 40.1032 4.412C40.1112 4.436 40.1472 4.468 40.2112 4.508C40.2992 4.588 40.3632 4.64 40.4032 4.664C40.4432 4.68 40.4992 4.744 40.5712 4.856C40.6352 4.928 40.6952 4.988 40.7512 5.036C40.8072 5.084 40.8512 5.148 40.8832 5.228V5.24C40.8832 5.28 40.8512 5.344 40.7872 5.432C40.7312 5.512 40.6232 5.62 40.4632 5.756L39.4552 6.668C39.4552 6.676 39.4552 6.684 39.4552 6.692C39.4632 6.692 39.4592 6.704 39.4432 6.728L39.2752 6.848C39.2592 6.864 39.2272 6.884 39.1792 6.908C39.1312 6.932 39.1072 6.976 39.1072 7.04C39.1552 7.096 39.2032 7.16 39.2512 7.232C39.2992 7.296 39.3552 7.348 39.4192 7.388C39.4752 7.412 39.5312 7.472 39.5872 7.568C39.6512 7.664 39.7152 7.76 39.7792 7.856C39.8512 7.952 39.9272 8.02 40.0072 8.06C40.0872 8.172 40.1992 8.332 40.3432 8.54C40.4952 8.748 40.6472 8.96 40.7992 9.176C40.9592 9.384 41.0872 9.556 41.1832 9.692ZM36.9832 5.612C36.9992 5.596 36.9992 5.596 36.9832 5.612C36.9672 5.628 36.9592 5.64 36.9592 5.648C36.9512 5.648 36.9592 5.636 36.9832 5.612ZM42.7311 3.02L42.6591 2.984C42.6591 2.968 42.6511 2.96 42.6351 2.96C42.6111 2.96 42.5951 2.964 42.5871 2.972C42.5791 2.98 42.5631 2.984 42.5391 2.984L42.4311 3.008L42.3471 2.984C42.3231 2.984 42.3071 2.98 42.2991 2.972C42.2911 2.964 42.2751 2.96 42.2511 2.96L41.9751 2.924L41.8911 2.888H41.8311C41.8311 2.904 41.8231 2.912 41.8071 2.912C41.7511 2.912 41.7151 2.908 41.6991 2.9C41.6911 2.892 41.6711 2.888 41.6391 2.888C41.5751 2.848 41.5311 2.784 41.5071 2.696C41.4991 2.68 41.4951 2.664 41.4951 2.648C41.4951 2.624 41.4911 2.608 41.4831 2.6C41.4751 2.592 41.4711 2.584 41.4711 2.576C41.4711 2.56 41.4671 2.548 41.4591 2.54V1.4C41.4671 1.368 41.4711 1.32 41.4711 1.256V0.943999C41.4711 0.84 41.4631 0.768 41.4471 0.727999V0.704C41.4471 0.696 41.4831 0.688 41.5551 0.68C41.6271 0.671999 41.6951 0.667999 41.7591 0.667999C41.8231 0.667999 41.8631 0.667999 41.8791 0.667999C41.9031 0.667999 41.9191 0.671999 41.9271 0.68H42.0951L42.3351 0.704L42.5631 0.775999C42.6191 0.784 42.7231 0.796 42.8751 0.812C43.0271 0.827999 43.1191 0.835999 43.1511 0.835999C43.1911 0.835999 43.2671 0.847999 43.3791 0.872C43.4991 0.896 43.5751 0.904 43.6071 0.895999C43.6471 0.887999 43.6871 0.903999 43.7271 0.943999C43.7671 0.975999 43.8031 0.991999 43.8351 0.991999C43.9791 0.968 44.1271 0.988 44.2791 1.052C44.3671 1.084 44.4431 1.112 44.5071 1.136C44.5711 1.152 44.6071 1.192 44.6151 1.256L44.6271 1.628C44.6351 1.86 44.6511 2.052 44.6751 2.204C44.7071 2.348 44.7071 2.548 44.6751 2.804L44.5911 2.888L43.5711 2.984C43.5071 2.984 43.4191 2.988 43.3071 2.996C43.2031 2.996 43.1391 3 43.1151 3.008C43.0831 3.016 43.0511 3.02 43.0191 3.02C42.9871 3.02 42.9511 3.02 42.9111 3.02H42.7311ZM44.0271 11.192L43.7391 11.156L43.1871 11.096L43.0191 11.108H42.5991C42.5911 11.076 42.5671 11.06 42.5271 11.06L42.3591 11.072C42.3031 11.08 42.2471 11.088 42.1911 11.096C42.1431 11.104 42.1071 11.108 42.0831 11.108C42.0671 11.092 42.0391 11.08 41.9991 11.072H41.9391C41.9391 11.064 41.9311 11.06 41.9151 11.06L41.8791 11.072L41.8671 11.084C41.7551 11.084 41.6791 11.052 41.6391 10.988C41.6071 10.932 41.5831 10.856 41.5671 10.76C41.5511 10.656 41.5431 10.504 41.5431 10.304C41.5511 10.248 41.5511 10.184 41.5431 10.112C41.5431 10.04 41.5351 9.924 41.5191 9.764L41.4831 9.272V5.876C41.4831 5.74 41.4791 5.608 41.4711 5.48C41.4711 5.352 41.4631 5.196 41.4471 5.012C41.4391 4.94 41.4271 4.876 41.4111 4.82C41.4031 4.812 41.3991 4.784 41.3991 4.736C41.4151 4.416 41.4831 4.204 41.6031 4.1C41.7311 3.988 41.9711 3.932 42.3231 3.932C42.3231 3.932 42.3471 3.924 42.3951 3.908C42.4191 3.9 42.4471 3.896 42.4791 3.896H42.4911C42.4991 3.896 42.5071 3.9 42.5151 3.908C42.5871 3.908 42.6311 3.916 42.6471 3.932H42.6951C42.7271 3.932 42.7551 3.92 42.7791 3.896L43.6791 3.908C43.7111 3.908 43.7471 3.908 43.7871 3.908C43.8271 3.9 43.8751 3.892 43.9311 3.884C43.9791 3.876 44.0831 3.872 44.2431 3.872C44.6111 3.872 44.7951 3.936 44.7951 4.064V5.912C44.7951 6.184 44.7911 6.488 44.7831 6.824C44.7751 7.16 44.7671 7.476 44.7591 7.772C44.7511 8.068 44.7391 8.3 44.7231 8.468L44.6871 8.96C44.6711 9.232 44.6591 9.468 44.6511 9.668C44.6431 9.868 44.6351 10.032 44.6271 10.16C44.6191 10.168 44.6151 10.188 44.6151 10.22C44.6151 10.244 44.6151 10.312 44.6151 10.424C44.6151 10.64 44.5871 10.816 44.5311 10.952C44.4751 11.08 44.3991 11.144 44.3031 11.144L44.0271 11.192ZM46.6643 11.072C46.5283 11.072 46.4323 11.032 46.3763 10.952C46.3283 10.872 46.3043 10.724 46.3043 10.508C46.3043 10.324 46.2963 10.184 46.2803 10.088C46.2643 9.984 46.2363 9.892 46.1963 9.812V6.596H46.0283C45.7963 6.596 45.6323 6.588 45.5363 6.572C45.4403 6.556 45.3723 6.528 45.3323 6.488C45.2683 6.464 45.2363 6.412 45.2363 6.332V4.868C45.2283 4.836 45.2203 4.804 45.2123 4.772C45.2123 4.74 45.2123 4.648 45.2123 4.496C45.2123 4.432 45.2523 4.38 45.3323 4.34C45.3963 4.276 45.4723 4.244 45.5603 4.244H46.1963V4.016C46.1963 3.616 46.2963 3.252 46.4963 2.924C46.7043 2.588 46.9883 2.328 47.3483 2.144C47.6843 1.968 47.9843 1.836 48.2483 1.748C48.5203 1.652 48.7923 1.592 49.0643 1.568C49.3363 1.544 49.6323 1.552 49.9523 1.592C50.0643 1.608 50.1643 1.62 50.2523 1.628C50.3403 1.628 50.4083 1.628 50.4563 1.628C50.4643 1.628 50.4763 1.636 50.4923 1.652L50.5523 1.676C50.5683 1.684 50.5803 1.692 50.5883 1.7C50.6043 1.7 50.6203 1.7 50.6363 1.7L50.6723 1.82C50.6723 1.892 50.6723 1.94 50.6723 1.964C50.6803 1.98 50.6883 2 50.6963 2.024C50.6963 2.344 50.7003 2.564 50.7083 2.684C50.7163 2.796 50.7203 2.884 50.7203 2.948C50.7203 3.148 50.7043 3.284 50.6723 3.356C50.6483 3.428 50.5923 3.472 50.5043 3.488L49.9643 3.536C49.7723 3.6 49.6283 3.664 49.5323 3.728C49.4763 3.768 49.4363 3.828 49.4123 3.908C49.3883 3.988 49.3803 4.116 49.3883 4.292H50.0843C50.3163 4.292 50.4963 4.316 50.6243 4.364C50.7603 4.404 50.8283 4.464 50.8283 4.544C50.8283 4.64 50.8283 4.7 50.8283 4.724C50.8283 4.748 50.8323 4.768 50.8403 4.784C50.8563 4.832 50.8603 4.868 50.8523 4.892C50.8523 4.916 50.8523 4.94 50.8523 4.964V5.192C50.8523 5.472 50.8523 5.644 50.8523 5.708C50.8523 5.764 50.8563 5.812 50.8643 5.852V6.092C50.8643 6.236 50.8483 6.356 50.8163 6.452C50.8003 6.588 50.7123 6.656 50.5523 6.656H50.0843C50.0523 6.648 50.0163 6.648 49.9763 6.656C49.9363 6.656 49.8563 6.652 49.7363 6.644L49.5323 6.62C49.5083 7.436 49.4803 8.172 49.4483 8.828C49.4243 9.476 49.3963 9.992 49.3643 10.376C49.3323 10.752 49.3043 10.944 49.2803 10.952C49.1603 11.008 48.9763 11.036 48.7283 11.036C48.5763 11.036 48.4843 11.036 48.4523 11.036C48.4203 11.036 48.3723 11.044 48.3083 11.06H47.5283L46.6643 11.072ZM52.6163 3.02L52.5443 2.984C52.5443 2.968 52.5363 2.96 52.5203 2.96C52.4963 2.96 52.4803 2.964 52.4723 2.972C52.4643 2.98 52.4483 2.984 52.4243 2.984L52.3163 3.008L52.2323 2.984C52.2083 2.984 52.1923 2.98 52.1843 2.972C52.1763 2.964 52.1603 2.96 52.1363 2.96L51.8603 2.924L51.7763 2.888H51.7163C51.7163 2.904 51.7083 2.912 51.6923 2.912C51.6363 2.912 51.6003 2.908 51.5843 2.9C51.5763 2.892 51.5563 2.888 51.5243 2.888C51.4603 2.848 51.4163 2.784 51.3923 2.696C51.3843 2.68 51.3803 2.664 51.3803 2.648C51.3803 2.624 51.3763 2.608 51.3683 2.6C51.3603 2.592 51.3563 2.584 51.3563 2.576C51.3563 2.56 51.3523 2.548 51.3443 2.54V1.4C51.3523 1.368 51.3563 1.32 51.3563 1.256V0.943999C51.3563 0.84 51.3483 0.768 51.3323 0.727999V0.704C51.3323 0.696 51.3683 0.688 51.4403 0.68C51.5123 0.671999 51.5803 0.667999 51.6443 0.667999C51.7083 0.667999 51.7483 0.667999 51.7643 0.667999C51.7883 0.667999 51.8043 0.671999 51.8123 0.68H51.9803L52.2203 0.704L52.4483 0.775999C52.5043 0.784 52.6083 0.796 52.7603 0.812C52.9123 0.827999 53.0043 0.835999 53.0363 0.835999C53.0763 0.835999 53.1523 0.847999 53.2643 0.872C53.3843 0.896 53.4603 0.904 53.4923 0.895999C53.5323 0.887999 53.5723 0.903999 53.6123 0.943999C53.6523 0.975999 53.6883 0.991999 53.7203 0.991999C53.8643 0.968 54.0123 0.988 54.1643 1.052C54.2523 1.084 54.3283 1.112 54.3923 1.136C54.4563 1.152 54.4923 1.192 54.5003 1.256L54.5123 1.628C54.5203 1.86 54.5363 2.052 54.5603 2.204C54.5923 2.348 54.5923 2.548 54.5603 2.804L54.4763 2.888L53.4563 2.984C53.3923 2.984 53.3043 2.988 53.1923 2.996C53.0883 2.996 53.0243 3 53.0003 3.008C52.9683 3.016 52.9363 3.02 52.9043 3.02C52.8723 3.02 52.8363 3.02 52.7963 3.02H52.6163ZM53.9123 11.192L53.6243 11.156L53.0723 11.096L52.9043 11.108H52.4843C52.4763 11.076 52.4523 11.06 52.4123 11.06L52.2443 11.072C52.1883 11.08 52.1323 11.088 52.0763 11.096C52.0283 11.104 51.9923 11.108 51.9683 11.108C51.9523 11.092 51.9243 11.08 51.8843 11.072H51.8243C51.8243 11.064 51.8163 11.06 51.8003 11.06L51.7643 11.072L51.7523 11.084C51.6403 11.084 51.5643 11.052 51.5243 10.988C51.4923 10.932 51.4683 10.856 51.4523 10.76C51.4363 10.656 51.4283 10.504 51.4283 10.304C51.4363 10.248 51.4363 10.184 51.4283 10.112C51.4283 10.04 51.4203 9.924 51.4043 9.764L51.3683 9.272V5.876C51.3683 5.74 51.3643 5.608 51.3563 5.48C51.3563 5.352 51.3483 5.196 51.3323 5.012C51.3243 4.94 51.3123 4.876 51.2963 4.82C51.2883 4.812 51.2843 4.784 51.2843 4.736C51.3003 4.416 51.3683 4.204 51.4883 4.1C51.6163 3.988 51.8563 3.932 52.2083 3.932C52.2083 3.932 52.2323 3.924 52.2803 3.908C52.3043 3.9 52.3323 3.896 52.3643 3.896H52.3763C52.3843 3.896 52.3923 3.9 52.4003 3.908C52.4723 3.908 52.5163 3.916 52.5323 3.932H52.5803C52.6123 3.932 52.6403 3.92 52.6643 3.896L53.5643 3.908C53.5963 3.908 53.6323 3.908 53.6723 3.908C53.7123 3.9 53.7603 3.892 53.8163 3.884C53.8643 3.876 53.9683 3.872 54.1283 3.872C54.4963 3.872 54.6803 3.936 54.6803 4.064V5.912C54.6803 6.184 54.6763 6.488 54.6683 6.824C54.6603 7.16 54.6523 7.476 54.6443 7.772C54.6363 8.068 54.6243 8.3 54.6083 8.468L54.5723 8.96C54.5563 9.232 54.5443 9.468 54.5363 9.668C54.5283 9.868 54.5203 10.032 54.5123 10.16C54.5043 10.168 54.5003 10.188 54.5003 10.22C54.5003 10.244 54.5003 10.312 54.5003 10.424C54.5003 10.64 54.4723 10.816 54.4163 10.952C54.3603 11.08 54.2843 11.144 54.1883 11.144L53.9123 11.192ZM58.967 3.872C58.999 3.872 59.035 3.876 59.075 3.884C59.115 3.884 59.163 3.888 59.219 3.896C59.235 3.896 59.263 3.9 59.303 3.908C59.343 3.908 59.387 3.908 59.435 3.908C59.603 3.908 59.911 3.976 60.359 4.112H60.431C60.487 4.112 60.531 4.124 60.563 4.148C60.571 4.156 60.579 4.168 60.587 4.184C60.595 4.192 60.603 4.196 60.611 4.196C60.651 4.196 60.675 4.208 60.683 4.232L60.911 4.424C61.303 4.76 61.599 5.22 61.799 5.804C61.983 6.34 62.075 6.9 62.075 7.484L61.979 7.712L58.763 7.772L58.415 7.784L58.427 8.096L58.475 8.384L58.583 8.672L58.895 8.948C58.983 9.02 59.107 9.08 59.267 9.128C59.435 9.176 59.607 9.2 59.783 9.2H59.843C59.979 9.2 60.147 9.172 60.347 9.116C60.547 9.052 60.759 8.992 60.983 8.936L61.655 8.768L61.799 8.948L62.015 10.472L61.883 10.688C61.515 10.864 61.183 11 60.887 11.096C60.591 11.192 60.315 11.256 60.059 11.288C59.835 11.312 59.639 11.332 59.471 11.348C59.311 11.372 59.159 11.384 59.015 11.384C58.775 11.384 58.559 11.36 58.367 11.312C58.175 11.264 57.975 11.228 57.767 11.204C57.471 11.172 57.191 11.072 56.927 10.904C56.367 10.472 55.955 9.996 55.691 9.476C55.435 8.948 55.299 8.32 55.283 7.592C55.267 6.768 55.427 6.048 55.763 5.432L55.823 5.228C55.855 5.212 55.871 5.2 55.871 5.192C55.879 5.176 55.887 5.168 55.895 5.168L55.919 5.12L55.991 5.072C56.271 4.544 56.723 4.184 57.347 3.992C57.723 3.912 58.263 3.872 58.967 3.872ZM58.967 5.324C58.943 5.324 58.915 5.328 58.883 5.336C58.851 5.336 58.827 5.356 58.811 5.396C58.795 5.444 58.759 5.476 58.703 5.492C58.647 5.508 58.607 5.608 58.583 5.792C58.559 5.992 58.535 6.148 58.511 6.26C58.495 6.372 58.527 6.428 58.607 6.428L59.399 6.416L59.363 6.056L59.327 5.828L59.279 5.576C59.279 5.544 59.271 5.52 59.255 5.504C59.247 5.488 59.239 5.464 59.231 5.432L59.111 5.348C59.063 5.332 59.015 5.324 58.967 5.324ZM65.2026 11.348C64.7626 11.348 64.3306 11.224 63.9066 10.976C63.4906 10.72 63.1786 10.372 62.9706 9.932C62.6266 9.46 62.4586 8.616 62.4666 7.4C62.4746 6.704 62.6066 6.104 62.8626 5.6C63.1186 5.096 63.4426 4.708 63.8346 4.436C64.2346 4.164 64.6506 4.028 65.0826 4.028C65.2826 4.028 65.5226 4.036 65.8026 4.052C66.0826 4.06 66.3626 4.1 66.6426 4.172C66.9306 4.236 67.1746 4.356 67.3746 4.532L67.3866 4.124V3.404H67.3986L67.3866 2.6V1.976C67.3866 1.888 67.4586 1.832 67.6026 1.808C67.7466 1.776 67.9346 1.76 68.1666 1.76C68.2306 1.76 68.2946 1.76 68.3586 1.76C68.4226 1.76 68.4866 1.764 68.5506 1.772C68.6146 1.78 68.6706 1.788 68.7186 1.796C68.7746 1.796 68.8186 1.796 68.8506 1.796C68.9226 1.804 69.0546 1.812 69.2466 1.82C69.4386 1.828 69.6106 1.832 69.7626 1.832L69.8226 1.784L70.5186 1.832C70.6866 1.816 70.7946 1.832 70.8426 1.88C70.8986 1.92 70.9266 1.972 70.9266 2.036C70.9266 2.092 70.9266 2.14 70.9266 2.18C70.9266 2.564 70.9266 2.884 70.9266 3.14C70.9266 3.388 70.9226 3.612 70.9146 3.812C70.9146 4.004 70.9146 4.208 70.9146 4.424C70.9146 4.632 70.9146 4.888 70.9146 5.192V5.228L70.9026 5.492V8.108C70.9026 8.38 70.9026 8.612 70.9026 8.804C70.9026 8.988 70.8946 9.124 70.8786 9.212V9.572C70.8626 9.716 70.8506 9.86 70.8426 10.004C70.8346 10.14 70.8306 10.288 70.8306 10.448C70.8306 10.672 70.8106 10.852 70.7706 10.988C70.7306 11.116 70.6386 11.18 70.4946 11.18L69.6906 11.168H68.4786C68.4306 11.152 68.3546 11.144 68.2506 11.144C68.1546 11.144 68.0386 11.144 67.9026 11.144C67.6706 11.144 67.4986 11.108 67.3866 11.036C67.2986 10.996 67.2426 10.92 67.2186 10.808C67.2026 10.688 67.2026 10.588 67.2186 10.508C67.2266 10.476 67.2306 10.448 67.2306 10.424C67.2306 10.392 67.2306 10.372 67.2306 10.364C67.2226 10.356 67.2186 10.332 67.2186 10.292L67.1106 10.64C66.9586 10.864 66.7946 11.024 66.6186 11.12C66.4426 11.216 66.2426 11.276 66.0186 11.3C65.7946 11.332 65.5226 11.348 65.2026 11.348ZM66.8466 9.128C66.8946 9.112 66.9386 9.06 66.9786 8.972C67.0266 8.884 67.0666 8.784 67.0986 8.672C67.1306 8.56 67.1546 8.432 67.1706 8.288C67.1946 8.144 67.2066 7.992 67.2066 7.832C67.2306 7.744 67.2466 7.652 67.2546 7.556C67.2626 7.452 67.2666 7.336 67.2666 7.208L67.2546 7.136C67.2466 7.088 67.2386 7.048 67.2306 7.016C67.2306 6.976 67.2306 6.944 67.2306 6.92C67.2226 6.776 67.1906 6.628 67.1346 6.476C67.0866 6.316 67.0186 6.18 66.9306 6.068C66.8426 5.956 66.7266 5.9 66.5826 5.9C66.4946 5.9 66.4146 5.972 66.3426 6.116C66.2786 6.26 66.2106 6.508 66.1386 6.86C66.1226 6.932 66.1146 7.032 66.1146 7.16C66.1226 7.288 66.1306 7.412 66.1386 7.532C66.1466 7.644 66.1466 7.724 66.1386 7.772C66.1466 7.852 66.1506 7.964 66.1506 8.108C66.1586 8.244 66.1666 8.376 66.1746 8.504C66.1906 8.632 66.2066 8.732 66.2226 8.804C66.2226 9.02 66.2826 9.14 66.4026 9.164C66.5226 9.18 66.6706 9.168 66.8466 9.128Z" fill="black"/>
        </svg>
        <div className='relative w-[35px] h-[35px]'>
            <Image
            src={"/Streak.gif"}
            alt='logo'
            fill
            />
        </div>

    </motion.div>
  )
}

export default Logo