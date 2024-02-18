//esta pagina sera una breve descripcion de mi autoria
import AOS from 'aos'
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(()=>{
    AOS.init({
      delay: 500,
    });
  },[])
  return (
    <div className="container">
      <h2 className="text-dark text-center" data-aos="fade-left">Mission</h2>
      <div data-aos="fade-right" className="mt-5 mb-5">
       <p className="justify-text p-5">
       Cupidatat officia dolore ex irure officia aliquip occaecat duis dolore
        consectetur. Dolore aute magna pariatur occaecat irure duis cillum. Sunt
        pariatur laboris incididunt sit ut incididunt. Non pariatur irure velit
        consequat aute aute do nostrud et occaecat. Fugiat proident culpa minim
        eu esse. Ex amet labore cillum ea nostrud ea. Labore voluptate laboris
        velit esse labore mollit reprehenderit tempor consequat et aliqua. Quis
        esse in in laborum.
       </p>
      </div>
      <h2 className="text-dark text-center" data-aos="fade-left">Vision</h2>
      <div data-aos="fade-right" className="mt-5 mb-5">
        <p className="justify-text p-5">
        Aliquip id commodo ut nostrud aute reprehenderit ut mollit.
        Reprehenderit adipisicing in sint ea voluptate elit adipisicing nostrud
        dolor mollit magna. Amet sunt excepteur qui anim cupidatat Lorem
        deserunt proident voluptate officia culpa. Exercitation Lorem quis magna
        fugiat. Anim magna officia mollit enim. Dolore laboris occaecat laboris
        sunt esse exercitation. Irure minim mollit aliqua ut.
        </p>
      </div>
      <h2 className="text-dark text-center" data-aos="fade-left">About me</h2>
      <div data-aos="fade-right" className="mt-5 mb-5">
        <p className="justify-text p-5">
        Aute minim nulla tempor reprehenderit culpa qui eiusmod dolore
        consectetur sit eiusmod. Mollit magna elit excepteur nisi veniam eiusmod
        velit esse. Laboris culpa tempor esse id enim incididunt ex Lorem veniam
        nulla voluptate non. Laborum non magna sint culpa proident anim ipsum
        eiusmod amet laborum et. Quis velit labore consectetur elit nulla irure
        incididunt voluptate minim exercitation Lorem dolore. 
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
