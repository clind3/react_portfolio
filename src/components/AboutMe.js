import React from "react";

export default function Footer() {
    // input htmlcode here
    return (
        <main className='text-center' style={{ padding: 24,borderRadius: 8 ,maxWidth: 800, alignContent:"center", margin: 'auto', backgroundColor:"rgb(199, 185, 140)"}}>
        <section class='about' style={{minHeight:200, display: 'flex', flexDirection: 'column' ,justifyContent: "center"}}>
        <h2>About Me</h2>
        <p>My name is Celina Lind. I am a Full Stack Web and Mobile App Developer, my interest for programming began at my year-long internship as a Engineering Assistant where I was able to program code for machining equipment.</p>
        </section>  
        <hr/>
        <section className='education' style={{minHeight:200, display: 'flex', flexDirection: 'column' ,justifyContent: "center"}}>
          
        <h2>Education</h2>
        Current Ohio State University Student planning to graduate with my Bachelor's in Computer Science for Software Engineering, in the Spring of 2023.
        I have already received my associates in Computer Science and am about to become a certified Full Stack Web Developer by the end of October 2021.
       </section>
        </main>
    );
}