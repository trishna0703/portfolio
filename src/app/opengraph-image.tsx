import { ImageResponse } from 'next/og';
export const alt = 'Trishna Kashyap — thoughtful products, from interface to intelligence';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:70,background:'#f8f7f4',color:'#222321'}}><div style={{display:'flex',fontSize:24}}>TRISHNA KASHYAP / FULL-STACK ENGINEER</div><div style={{display:'flex',flexDirection:'column',fontSize:76,letterSpacing:-3,lineHeight:1.1}}><span>Thoughtful products,</span><span style={{color:'#783f4b'}}>interface to intelligence.</span></div><div style={{display:'flex',fontSize:20,color:'#6b6b65'}}>Bengaluru, India · Full-stack engineering & AI explorations</div></div>,size);
}
