import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CarouselComponent } from './Carousel/CarouselComponent';

export const HomeScreen = () => {

    const {ui} = useSelector(state => state);
    const {english} = ui;

  return (
    <div>
        <CarouselComponent/>

        <div className='row'>
            <div className='col-6 mt-5 home__main-content'>
                <h1>
                    {
                        english
                        ?   "¡Aprender idiomas con CLASSMATES es muy fácil!"
                        :   "¡Learning languages with CLASSMATES it's easy!"
                    }
                </h1>
                {
                    english
                    ?   <ul className='home__unordered-list'>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                CLASSMATES evalúa tus aptitudes con el objetivo de asignarte el
                                profesional más adecuado según tus necesidades y conocimientos
                                previos.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Realizamos un seguimiento pedagógico y periódico del avance en tu
                                proceso de aprendizaje.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Nuestras clases personalizadas significan más aprendizaje y menos
                                distracción lo cual es ¡maravilloso!
                            </li>
                        </ul>
                    :   <ul className='home__unordered-list'>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                CLASSMATES evaluates your skills with the aim of assigning you the 
                                most suitable professional according to your needs, previous knowledge 
                                and level.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                We carry out a pedagogical and periodic monitoring of the progress in 
                                your learning process.
                            </li>
                            <li><i className="fa-solid fa-bullhorn me-3"></i>
                                Our personalized classes mean more learning and less distraction which 
                                is wonderful!
                            </li>
                        </ul>
                }
                
                <Link 
                    to="contact"
                >
                    <div className='home__button'>
                        <button
                            className='btn btn-info'
                        >
                            {
                                english
                                ?   "Contáctanos!"
                                :   "Contact us!"
                            }
                        </button>
                    </div>
                </Link>
            </div>

            <div className='col-6 mt-3 mb-2 home__picture'>
            </div>

        </div>

        <div className='row'>

            <h1 className='mb-5 mt-5 d-flex justify-content-center'>
                {
                    english
                    ?   "Docentes Expertos"
                    :   "Expert Teachers"
                }
            </h1>

            {
                english
                ?   <h5 className='home__paragraph'>
                        Contamos con docentes titulados, cuidadosamente seleccionados por sus
                        excelentes habilidades pedagógicas y su gran trayectoria en enseñanza,
                        quienes gracias a su compromiso y pasión por el mundo de la educación
                        hacen de las tutorías online una excelente experiencia en todos los
                        aspectos, cumpliendo siempre tus expectativas, resolviendo todas tus
                        dudas y motivándote a mejorar.
                        Tienes a tu disposición clases para todos los niveles: Infantil, Primaria,
                        Bachillerato, Universidad y adultos.    
                        Nuestros docentes se encargan de que tus tutorías sean una experiencia
                        enriquecedora y lo mejor es que todas tus clases serán muy dinámicas.
                        Nuestros profesionales cuentan con una gran variedad de materiales y
                        actividades didácticas para que así puedas disfrutar de tu proceso de
                        aprendizaje y puedas afianzar aún más tus conocimientos.    
                    </h5>
                :   <h5 className='home__paragraph'>
                        We have qualified teachers, carefully selected because of their excellent 
                        pedagogical skills and their great teaching experience, who, thanks to 
                        their commitment and passion for the world of education and languages, 
                        make online tutoring an excellent experience in all aspects, always 
                        meeting your expectations, solving all your doubts and motivating you 
                        to improve.
                        You have at your disposal classes for all levels: Infant, Primary, 
                        Baccalaureate, University and adults.
                        Our teachers ensure that your tutorials are an enriching experience and the 
                        best thing is that all your classes will be very dynamic. Our professionals 
                        have a wide variety of teaching materials and activities so that you can 
                        enjoy your learning process and further strengthen your knowledge.
                    </h5>
            }
        </div>

        <div className='row'>
            <div className='col-4 mt-5'>

            <i className="fa-solid fa-chalkboard-user fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        Hacemos traducciones de documentos oficiales y no oficiales tales como;
                        Tesis, textos escolares y/o universitarios, libros, diplomas, actas de
                        grado, etc.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Translations of official and unofficial documents such as; Theses, school 
                        and/or university texts, books, diplomas, degree certificates, etc.
                    </p>
            }
            </div>
           <div className='col-4 mt-5'>
            <i className="fa-solid fa-school fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        Te preparamos para la presentación de exámenes internacionales tales
                        como: IELTS, TOEFL, CAMBRIDGE, MET.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Preparation for international exams such as: IELTS, TOEFL, CAMBRIDGE, MET.
                    </p>
            }
           </div>
           <div className='col-4 mt-5'>
           <i className="fa-solid fa-graduation-cap fa-6x d-flex justify-content-center"></i>
            {
                english
                ?   <p className='home__paragraph mt-5'> 
                        Participación en clubs de conversación para que practiques lo
                        aprendido con tus tutores, interactúes con otros estudiantes y pierdas
                        del miedo a hablar en otro idioma.
                    </p>
                :   <p className='home__paragraph mt-5'> 
                        Participation in conversation clubs so that you can practice what you have 
                        learned with your tutors, interact with other students and lose the fear 
                        of speaking in another language.
                    </p>
            }
           </div>
        </div>

        <div className='row'>
            
            <div className='col-6 mt-5 home__picture2 mt-5'>
            </div>

            <div className='col-6 mt-5 home__main-content'>
                <h1 className='d-flex justify-content-center'>
                    {
                        english
                        ?   "Economía"
                        :   "Economic"
                    }      
                </h1>
                {
                    english
                    ?   <h5 className='home__paragraph'>
                            En CLASSMATES no solo encuentras clases divertidas y de calidad sino también 
                            asesorías económicas. Además, puedes ahorrar costos adicionales de transporte, 
                            matrículas y materiales, ya que con nosotros solamente debes pagar por tus 
                            tutorías y estar listo para aventurarte en este maravilloso mundo del 
                            aprendizaje acompañado de la excelente orientación que te brinda CLASSMATES.
                        </h5>
                    :   <h5 className='home__paragraph'>
                            With CLASSMATES in addition to finding fun and quality classes, you 
                            find economic advice. In addition, you can save additional transportation 
                            costs, tuition and materials, since with us you only have to pay for your 
                            tutorials and be ready to venture into this wonderful world of learning 
                            accompanied by the excellent guidance that CLASSMATES provides you.
                        </h5>
                }
                <Link 
                to="contact"
            >
                <div className='home__button'>
                <button
                        className='btn btn-info'
                    >
                        {
                            english
                            ?   "Contáctanos!"
                            :   "Contact us!"
                        }
                    </button>
                </div>
            </Link>

            </div>

        </div>

         <div className='row'>
                    
            <h1 className='mb-5 mt-5 d-flex justify-content-center'>Testimonios</h1>

            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-2 testimony__icon">
                    </div>
                    <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">
                            Me han brindado herramientas creativas y personalizadas para estudiar. He podido dominar temas que para
                            mí eran muy difíciles gracias a que me han explicado temas complejos de una manera muy sencilla, y se 
                            han adaptado a mi estilo de aprendizaje. Anteriormente había realizado varios cursos de inglés, sin 
                            embargo, no sentía que avanzaba ya que los cursos no se acomodaban a mis necesidades y objetivos. 
                            Con classmates he avanzado muchísimo y además disfruto mucho las clases.
                        </p>
                        <p className="card-text"><small className="text-muted">Javier Saenz</small>
                        <span className='home__chile-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-2 testimony__icon">
                    </div>
                    <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">
                            Me recomendaron tomar clases de inglés con Classmates por su forma sencilla, 
                            creativa y eficiente de enseñar. En poco tiempo logré avanzar mucho en mi nivel, ahora soy capaz de 
                            entender textos, elaborar oraciones y mejoré mucho mi pronunciación. Lo recomiendo mucho ya que crearon 
                            un programa especial para mi de acuerdo a mi nivel. Mi profe es muy paciente y explica los temas con 
                            mucha claridad. Ideal para quienes buscan aprender un nuevo idioma.
                        </p>
                        <p className="card-text"><small className="text-muted">Luisa Pedraza</small>
                        <span className='home__colombia-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                <div className="col-md-2 testimony__icon">
                    </div>
                    <div className="col-md-10">
                    <div className="card-body">
                        <p className="card-text">
                            Estoy muy contento con mis tutorías de inglés, realmente lo recomiendo. Las 
                            clases están cuidadosamente preparadas con anticipación y hacen un trabajo minucioso, 
                            lo que me ha permitido aprender con excelentes herramientas. Siempre están muy atentos a 
                            mis objetivos y he recibido constante retroalimentación
                        </p>
                        <p className="card-text"><small className="text-muted">Andrez Felipe Ruiz</small>
                        <span className='home__argentina-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-4 testimony__icon">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">
                            I have started my Spanish lessons with classmates 6 months ago. It has been a wonderful experience.
                            My teachers are patient, knowledgeable and have a real understanding on how to teach a foreign 
                            language. The process has also been fun and they follow my process constantly. I have learnt a lot!
                        </p>
                        <p className="card-text"><small className="text-muted">Gerry Yorden</small>
                        <span className='home__us-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-4 testimony__icon">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">
                            We love CLASSMATES! They have amazing tutors. Since my 7 and 11 year old girls 
                            have had the opportunity to take these tutoring lessons, they've improved a lot with their Spanish. My 
                            girls are a little shy but I appreciate the teachers’ constant effort in fully engaging them and making 
                            each lesson fun, exciting and interesting. My family fully recommends these teachers.
                        </p>
                        <p className="card-text"><small className="text-muted">Jaime Dee</small>
                        <span className='home__canada-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-4 testimony__icon">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">
                            As I needed to improve my English for work, during the last year CLASSMATES has helped me a lot. They are 
                            professional, supportive and kind. I really thank my teacher for the skills I have acquired and the 
                            always professional and respectful way she has given me feedback to enhance my Spanish language skills.
                        </p>
                        <p className="card-text"><small className="text-muted">Leonard Joseph Baptiste</small>
                        <span className='home__us-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
                <div className="card mb-3">
                <div className="row g-0 home__testimony-alignment">
                    <div className="col-md-4 testimony__icon">
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">
                        J’ai commencé les cours de Français avec Classmates. Mon professeur est très pédagogue et patient. 
                        Il trouve toujours les supports qui m’intéressent le plus pour travailler le Français. et me fait 
                        travailler sur la culture française.
                        Je suis maintenant confortable pour tenir une conversation de la vie quotidienne.
                        </p>
                        <p className="card-text"><small className="text-muted">Salomé Maçon</small>
                        <span className='home__belgium-icon'/></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>                
    </div>
  )
}
