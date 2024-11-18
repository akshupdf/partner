import React from 'react'
import './App.css';
import bg from "../src/images/dpbg1.mp4"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">

    <section className="h-screen relative">
      <video
        src={bg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover  hidden sm:block "
      ></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative mx-auto lg:px-20 py-32 text-white flex flex-col lg:items-start justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-[#6b9855] font-mont">
        DP PARTNERS
        </h1>
        <h1 className="text-4xl md:text-5xl font-carl mb-6 leading-tight ">
        Një emër që ju i besoni!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Të gjitha objektet projektohen dhe ekzekutohen nga një grup profesional i arkitektëve, inxhiniereve , menaxhim profesional dhe grup profesional të gjitha fazave duke u kujdesur deri në detajin më të vogël , gjë që garanton suksesin tonë për sot dhe të ardhmen.
        </p>
        <button className="bg-[#6b9855] hover:bg0 text-white px-6 md:px-8 py-3 md:py-2 rounded-xl hover:bg-neutral-800 transition">
          <a href="https://partners-dp.com/#" target='_blank' rel="noreferrer" className="">Më shumë</a>
        </button>
      </div>
    </section>
    
       <section className="lg:h-screen relative flex w-[100%] lg:flex-row sm:flex-col">
        <div className='lg:w-[50%] m-auto lg:px-[14vh] sm:px-8 py-4'>
        <h1 className='text-[#6b9855] text-3xl font-mont font-semibold mb-6 '>Kalkulatori për Blerjen e Apartamentit</h1>
        <p className='text-left text-lg font-light'>Po planifikoni të blini apartamentin e ëndrrave tuaja? Përdorni kalkulatorin tonë të thjeshtë dhe të saktë për të vlerësuar kostot e përfshira në blerjen tuaj. Qoftë nëse jeni blerës për herë të parë apo investitor me përvojë, ky mjet do t’ju ndihmojë të kuptoni se sa mund të përballoni, sa mund të jenë pagesat tuaja mujore të kredisë dhe cilat janë shpenzimet shtesë që duhet të merrni parasysh.
</p><p className='text-left text-lg font-light mt-4' >
Thjesht vendosni detajet e apartamentit që ju intereson, dhe lini kalkulatorin tonë të bëjë pjesën tjetër!</p>
        </div>
      
        <div className='lg:w-[50%]  m-auto h-screen text-center lg:py-[20vh] text-white bg-[#6b9855bf]'>
<div>
<div className='m-auto'>
    <h1 className='text-5xl font-semibold'>30%</h1>
    <p>Pjesëmarrja</p>
</div>
<div>
    <h1 className='text-5xl font-semibold mt-4'>0%</h1>
    <p>KAMATA</p>
</div>
<div>
    <h1 className='text-5xl font-semibold mt-4'>10</h1>
    <p>VITE</p>
</div>
<div>
    <h1 className='text-5xl font-semibold mt-4'>70%</h1>
    <p>Pagesa mujore</p>
</div>
</div>
<button className='text-xl  mt-20 bg-white text-black  px-[15vh] py-2 rounded-full'>Kalkulo</button>
</div>
       </section>

      <section className=" font-mont flex h-screen w-[100%] lg:flex-row sm:flex-col">
    
      <div class="bg-box  cursor-pointer">
      <Link to ="/build"> 
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <h1 className="absolute top-[5vh] left-[4vh] text-white  text-[20px]">DP Partners </h1> 
    <div className='flex'>
       <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px]  sm:text-4xl">Kompleksi  <span className='font-normal'>  JEHON...</span></h1> 

    </div>
    <h1 className='absolute left-[-5vh] bottom-[20vh] font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
    </Link> 
  </div>

  <div className="bg-box  cursor-pointer">
  <Link to ="/build"> 
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <h1 className="absolute top-[5vh] left-[4vh] text-white  text-[20px]">DP Partners </h1> 
    <div className='flex'> <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px]  sm:text-4xl">Lagjja E <span className='font-normal'> KALTËR</span></h1> 

    </div>
    <h1 className='absolute left-[-5vh] bottom-[20vh] font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
    </Link>  </div>

  <div className="bg-box cursor-pointer">
  <Link to ="/build"> 
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <h1 className="absolute top-[5vh] left-[4vh] text-white  text-[20px]">DP Partners </h1> 
    <div className='flex'> <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px]  sm:text-4xl">Kompleksi <span className='font-normal'>TOPHANE</span></h1> 

    </div>
    <h1 className='absolute left-[-5vh] bottom-[20vh] font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
    </Link>
  </div>
</section>


       <section className='h-screen mt-20  flex lg:flex-row sm:flex-col'>
        <div className='lg:w-[50%] m-auto border-8 border-[#d3e6cb]  '>
            <img src="https://partners-dp.com/wp-content/uploads/elementor/thumbs/7-qszlgd7cb0pwaqgr8ef2dfth6778aij020ugjl2ze8.jpg" alt="home"/>
        </div>
        <div className='lg:w-[50%] lg:py-[50vh] sm:py-8 px-[8vh] h-screen'>
        <h1 className='lg:text-[80px] sm:text-4xl text-[#6b9855] font-bold font-mont'>Rreth Nesh</h1>
        <p className='text-xl font-light lg:mt-8'>Ju prezantojmë emrin më të ri në industrinë e ndërtimit, “DP Partners,” i cili në vetvete përmban një grup kuadrash me përvojë të gjatë në këtë industri. Ky grup drejtohet nga Durim Prishtina, një emër i njohur me përvojë 20-vjeçare si bashkëthemelues dhe drejtor ekzekutiv i ndërmarrjes së njohur NTN Tregtia.

Ky është një koncept i ri që mungon në tregun kosovar dhe do të sjellë një partneritet të ndershëm dhe profesional në çdo aspekt.</p>
        </div>
       </section>
       <section className='h-screen lg:mt-[60vh] sm:mt-8  flex lg:flex-row sm:flex-col'>
       <div className='lg:w-[50%] py-[50vh] px-[8vh] h-screen'>
        <h1 className='lg:text-[60px] sm:text-4xl text-[#6b9855] font-semibold font-mont'>PRODHIMI</h1>
        <p className='text-xl font-light lg:mt-8'>Ju prezantojmë emrin më të ri në industrinë e ndërtimit, “DP Partners,” i cili në vetvete përmban një grup kuadrash me përvojë të gjatë në këtë industri. Ky grup drejtohet nga Durim Prishtina, një emër i njohur me përvojë 20-vjeçare si bashkëthemelues dhe drejtor ekzekutiv i ndërmarrjes së njohur NTN Tregtia.  </p>
        <p className='text-xl font-light mt-8'> Ky është një koncept i ri që mungon në tregun kosovar dhe do të sjellë një partneritet të ndershëm dhe profesional në çdo aspekt.</p>
          </div>
        <div className='lg:w-[50%] m-auto border-8 border-[#d3e6cb]  mt-8'>
            <img src="https://partners-dp.com/wp-content/uploads/elementor/thumbs/DP-Partners-0946-scaled-qf45dk5875cq6yuv7cgedi1ipjrnornfxkz4czr44w.jpg" alt="home"/>
        </div>
      
       </section>

       <section className=" font-mont flex h-screen lg:mt-[60vh] sm:mt-[90vh] w-[100%] lg:flex-row sm:flex-col">
    
    <div class="bg-box2  cursor-pointer">
    <Link to ="/build"> 
     <div className="absolute inset-0 bg-black opacity-50"></div>
   
  <div className='flex'>
     <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px] sm:text-2xl">FASADA    <span className='font-normal'>   STRUKTURALE</span></h1> 

  </div>
  <h1 className='absolute left-[-5vh] lg:bottom-[20vh] sm:bottom-12 font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
  </Link> 
</div>
<div class="bg-box2  cursor-pointer">
    <Link to ="/build"> 
     <div className="absolute inset-0 bg-black opacity-50"></div>
     {/* <h1 className="absolute top-[5vh] left-[4vh] text-white  text-[20px]">DP Partners </h1>  */}
  <div className='flex'>
     <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px] sm:text-2xl">BETONIMI </h1> 

  </div>
  <h1 className='absolute left-[-5vh] lg:bottom-[20vh] sm:bottom-12 font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
  </Link> 
</div>
<div class="bg-box2  cursor-pointer">
    <Link to ="/build"> 
     <div className="absolute inset-0 bg-black opacity-50"></div>
     {/* <h1 className="absolute top-[5vh] left-[4vh] text-white  text-[20px]">DP Partners </h1>  */}
  <div className='flex'>
     <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px] sm:text-2xl">GRANITIT  </h1> 

  </div>
  <h1 className='absolute left-[-5vh] lg:bottom-[20vh] sm:bottom-12 font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
  </Link> 
</div>
<div class="bg-box2  cursor-pointer">
    <Link to ="/build"> 
     <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className='flex'>
     <h1 className="absolute top-[9vh] left-[4vh] text-white font-bold lg:text-[40px] sm:text-2xl">DYER   <span className='font-normal'>   DHE DRITARE</span></h1> 

  </div>
  <h1 className='absolute left-[-5vh] lg:bottom-[20vh] sm:bottom-12 font-semibold text-white lg:text-[25px] -rotate-90'>Më SHUMë</h1>
  </Link> 
</div>
</section>
        </div>
  )
}
