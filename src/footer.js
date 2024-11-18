import React from 'react'

export default function Footer() {
  return (
    <div className='w-[100%] font-mont mt-16'>
        <div className='w-[90%] flex justify-center'>
            <div className='w-[30%] px-10'>
            <img
 src="https://partners-dp.com/wp-content/uploads/2023/10/cropped-1000x1000px-15.png"
 alt="logo"
 className="w-[25vh] mb-6  "
 />
          <p className='font-light'>  Ju prezantojmë emrin më të ri në industrinë e ndërtimit, “DP Partners,” i cili në vetvete përmban një grup kuadrash me përvojë të gjatë në këtë industri.
          </p>    </div>
            <div className='w-[20%]'>
         <h1 className='font-semibold text-2xl'>Komplekset </h1>   
<ul><li className='my-4'>Kompleksi JEHON... </li>
<li className='my-4'> Lagjja e KALTËR</li>
<li className='my-4'> Kompleksi TOPHANE</li>
</ul>
</div>
<div className='w-[20%]'>
<h1 className='font-semibold text-2xl'>Prodhimi </h1>   
<ul><li className='my-4'>Betonimi
 </li>
<li className='my-4'> Dyer dhe Dritare</li>
<li className='my-4'> Graniti</li>
<li className='my-4'>Fasada Strukturale</li>
</ul>
</div>
<div className='w-[30%]'>
<h1 className='font-semibold text-2xl'>Na Kontaktoni</h1>
<button className='bg-[#6b9855] text-white px-10 py-2 my-2 rounded-sm mt-4'>Lokacioni</button>
<p className='font-light py-4'>Enver Maloku p.n, Rruga C (kompleksi Tregtia), Prishtina 10000</p>
<ul className='font-light py-4'>
<li> Email: info@partners-dp.com</li>
<li> Phone: +383 45 838 384</li>
<li> Hours: Mon-Fri 8:00AM - 5:00PM</li>
</ul>
</div>
        </div>
        <p className='flex text-center bg-[#6b9855] justify-center w-full py-2 rounded-lg text-white text-xl'>© All Rights Reserved to DP PARTNERS</p>
    </div>
  )
}
