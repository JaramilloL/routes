//esta pagina contendra un mini formulario para el envio de comentarios
import Contact from "../components/Contact";
import Info from "../components/Info";
import Tecnology from "../components/Tecnology";

const ContactPage = () => {
  return (
    <div className="container m-auto">
      <Contact />

      <Info />

      <Tecnology />
    </div>
  );
};

export default ContactPage;
