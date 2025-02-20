import Image from "next/image";
import Link from "next/link";
import React from "react";

const Terms = () => {
  return (
    <div className="w-full flex items-center flex-col px-10">
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src="/assets/images/logohor.png"
          alt="Escuela De Libertad"
          width={400}
          height={400}
        />
      </div>
      <div className="md:w-[1000px] w-[300px]">
        {/* POLITCA DE PRIVACIDAD */}
        <h2 className="w-full text-center font-semibold my-6">
          POLÍTICA DE PRIVACIDAD
        </h2>
        <p className="font-semibold mb-2">1. Introducción</p>
        <p className="mb-6">
          En Escuela de Libertad, valoramos y respetamos tu privacidad. Esta
          Política de Privacidad explica qué datos recopilamos, cómo los
          utilizamos y qué derechos tienes sobre ellos. Nos comprometemos a
          tratar tu información de manera responsable y conforme a la normativa
          vigente.
        </p>

        <p className="font-semibold mb-2">
          2. Responsable del tratamiento de los datos
        </p>
        <p className="mb-6">
          El responsable del tratamiento de tus datos personales es Escuela de
          Libertad, con la dirección de correo electrónico:{"  "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="font-semibold mb-2">3. Datos personales recopilados</p>
        <div className="mb-6">
          A través de nuestro sitio web y plataforma e-learning, los datos
          personales que podemos recopilar incluyen:
          <ul className="list-disc ml-6">
            <li>Nombre y apellido.</li>
            <li>Correo electrónico.</li>
            <li>Teléfono.</li>
          </ul>
          Estos datos se obtienen de forma voluntaria cuando te pones en
          contacto con nosotros, completas algún formulario o te registras en
          nuestro sitio web y plataforma e-learning.
        </div>
        <p className="font-semibold mb-2">4. Finalidad del tratamiento</p>
        <div className="mb-6">
          Utilizamos estos datos para:
          <ul className="list-disc ml-6">
            <li>Gestionar tu registro y acceso a la plataforma e-learning.</li>
            <li>Ofrecerte una experiencia de aprendizaje personalizada.</li>
            <li>
              Gestionar pagos y facturación, en caso de que adquieras servicios.
            </li>
            <li>
              Enviar comunicaciones sobre actualizaciones, recordatorios y
              novedades.
            </li>
            <li>
              Mejorar nuestros servicios mediante análisis del uso de nuestro
              sitio web y plataforma e-learning.
            </li>
          </ul>
        </div>
        <p className="font-semibold mb-2">
          5. Legitimación para el tratamiento de datos
        </p>
        <div className="mb-6">
          Utilizamos estos datos para:
          <ul className="list-disc ml-6">
            <li>
              Cuando te registras en nuestro sitio web y plataforma e-learning y
              utilizas nuestros servicios.
            </li>
            <li>
              Para el envío de comunicaciones comerciales o personalización de
              la experiencia.
            </li>
            <li>
              Para la gestión de facturación y cumplimiento de normativas
              fiscales.
            </li>
          </ul>
        </div>
        <p className="font-semibold mb-2">
          6. Destinatarios de los datos y transferencias internacionales
        </p>
        <div className="mb-6">
          Tus datos son confidenciales y no se ceden ni comparten a terceros,
          salvo en los siguientes casos:
          <ul className="list-disc ml-6">
            <li>Plataformas de pago para gestionar transacciones: Stripe.</li>
            <li>
              Cumplimiento de obligaciones legales ante autoridades competentes.
            </li>
          </ul>
          No obstante, tus datos podrán ser almacenados en nuestro hosting y
          eventualmente utilizados para la gestión de respuestas o el envío de
          comunicaciones.
        </div>
        <p className="font-semibold mb-2">7. Derechos de los usuarios</p>
        <div className="mb-6">
          Como titular de los datos personales, tienes derecho a:
          <ul className="list-disc ml-6">
            <li>Acceder a tus datos personales.</li>
            <li>Rectificar tus datos si son inexactos o incompletos.</li>
            <li>
              Solicitar la cancelación o supresión de tus datos cuando, entre
              otros motivos, ya no sean necesarios para los fines para los que
              fueron recopilados.
            </li>
            <li>Oponerte al tratamiento de tus datos.</li>
          </ul>
          Para ejercer cualquiera de estos derechos, puedes enviarnos un correo
          a teconchen@gmail.com con el asunto &quot;Protección de Datos&quot;.
        </div>
        <p className="font-semibold mb-2">8. Conservación de los datos</p>
        <div className="mb-6">
          Conservaremos tus datos personales mientras:
          <ul className="list-disc ml-6">
            <li>Tengas una cuenta activa en nuestra plataforma e-learning.</li>
            <li>
              Sea necesario para cumplir con nuestras obligaciones legales y
              contractuales.
            </li>
            <li>
              Cuando los datos ya no sean necesarios, los eliminaremos de manera
              segura.
            </li>
          </ul>
        </div>
        <p className="font-semibold mb-2">9. Seguridad de los datos</p>
        <p className="mb-6">
          Implementamos medidas técnicas y organizativas para proteger tus datos
          frente a accesos no autorizados, pérdidas o alteraciones. Sin embargo,
          es importante que utilices contraseñas seguras y no compartas tus
          credenciales con terceros.
        </p>
        <p className="font-semibold mb-2">
          10. Modificaciones y actualizaciones
        </p>
        <p className="mb-6">
          Si realizamos cambios en esta Política para adaptarla a modificaciones
          normativas así como a prácticas del sector, lo informaremos en nuestro
          sitio web y plataforma e-learning para que puedas revisar las
          actualizaciones y tomar cualquier decisión respecto a tu cuenta en
          Escuela de Libertad.
        </p>
        <p className="font-semibold mb-2">11. Contacto</p>
        <p className="mb-6">
          Si tienes alguna pregunta o duda sobre nuestra Política de Privacidad,
          puedes contactarnos en{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="w-full text-center italic">
          Fecha de última actualización: 09 de febrero de 2025
        </p>
        {/* POLÍTICA DE USO DEL SITIO WEB Y PLATAFORMA E-LEARNING */}
        <h2 className="w-full text-center font-semibold my-12">
          POLÍTICA DE USO DEL SITIO WEB Y PLATAFORMA E-LEARNING
        </h2>
        <p className="font-semibold mb-2">1. Objeto y ámbito de aplicación</p>
        <p className="mb-6">
          Bienvenidos a Escuela de Libertad.
          <br /> <br />
          Esta Política de Uso establece los términos y condiciones bajo los
          cuales puedes acceder y utilizar los contenidos, servicios y
          funcionalidades disponibles en nuestro sitio web y plataforma
          e-learning:{" "}
          <Link href="www.escueladelibertad.es" className="underline">
            {" "}
            www.escueladelibertad.es
          </Link>{" "}
          <br />
          <br />
          Nuestro objetivo es ofrecer un espacio de aprendizaje enriquecedor,
          donde puedas acceder a materiales y recursos educativos.
          <br />
          <br />
          Al utilizar nuestro sitio web y plataforma e-learning, aceptas estas
          condiciones de uso. Si en algún momento tienes dudas o inquietudes
          sobre ellas, estaremos encantados de atenderte en{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="font-semibold mb-2">2. Condiciones generales de uso</p>
        <p className="pl-8 font-semibold">
          2.1. Acceso a la plataforma
          <br /> <br />
        </p>
        <p className="mb-6">
          Puedes navegar libremente por nuestro sitio web y plataforma
          e-learning. Sin embargo, para acceder a los cursos y materiales
          educativos, es posible que necesites registrarte y, en algunos casos,
          realizar un pago.
        </p>
        <p className="pl-8 font-semibold">
          2.2. Modificación de condiciones
          <br /> <br />
        </p>
        <p className="mb-6">
          Con el objetivo de mejorar continuamente nuestros servicios y/o
          adaptarnos a cambios normativos, es posible que realicemos
          modificaciones en la presente Política. Si eso ocurre, te informaremos
          a través de nuestro sitio web o plataforma e-learning para que estés
          al tanto de dichos cambios.
        </p>
        <p className="font-semibold mb-2">
          3. Propiedad intelectual y uso de los contenidos
        </p>
        <p className="pl-8 font-semibold">
          3.1. Derechos de propiedad intelectua
          <br /> <br />
        </p>
        <p className="mb-6">
          Todos los contenidos disponibles en la plataforma, incluyendo cursos,
          textos, videos, imágenes, gráficos, logotipos, íconos, materiales
          descargables y software, son propiedad de Escuela de Libertad o de sus
          creadores. Nos alegra compartir este conocimiento contigo y confiamos
          en que harás un uso adecuado de él.
        </p>
        <p className="pl-8 font-semibold">
          3.2. Uso autorizado
          <br /> <br />
        </p>
        <div className="mb-6">
          <ul className="list-disc ml-6">
            <li>Acceder y visualizar los cursos en los que te has inscrito.</li>
            <li>
              Descargar materiales complementarios proporcionados por los
              instructores exclusivamente para tu uso personal y no comercial.
            </li>
          </ul>
        </div>
        <p className="pl-8 font-semibold">
          3.3. Uso no admitido
          <br /> <br />
        </p>
        <div className="mb-6">
          Para garantizar un ambiente de respeto y aprendizaje sostenible, no
          está permitido:
          <br />
          <br />
          <ul className="list-disc ml-6">
            <li>
              Reproducir, distribuir, grabar, modificar, vender, alquilar,
              difundir o compartir los contenidos de nuestro sitio web y
              plataforma e-learning sin nuestra autorización previa por escrito.
            </li>
            <li>Grabar, retransmitir o difundir nuestras clases en vivo.</li>
            <li>
              Utilizar los materiales con fines comerciales sin nuestro
              consentimiento expreso y por escrito.
            </li>
          </ul>
          <br />
          El incumplimiento de estas disposiciones podrá conllevar la suspensión
          inmediata de tu cuenta sin derecho a reembolso, así como la adopción
          de medidas legales en caso de infracción grave. Si en algún momento
          tienes dudas sobre cómo puedes utilizar los contenidos, estaremos
          encantados de ayudarte en{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </div>
        <p className="font-semibold mb-2">
          4. Registro y acceso a la plataforma
        </p>
        <p className="pl-8 font-semibold">
          4.1. Registro de Usuarios
          <br /> <br />
        </p>
        <p className="mb-6">
          Para disfrutar de los servicios de Escuela de Libertad, puedes
          registrarte en nuestro sitio web y plataforma e-learning con
          información veraz, completa y actualizada.
        </p>
        <p className="pl-8 font-semibold">
          4.2. Seguridad de la cuenta
          <br /> <br />
        </p>
        <p className="mb-6">
          Tu cuenta es personal e intransferible. Si detectas un acceso no
          autorizado, por favor, notifícanos de inmediato para ayudarte a
          proteger tu información a{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="pl-8 font-semibold">
          4.3. Suspensión y cancelación de cuenta
          <br /> <br />
        </p>
        <div className="mb-6">
          Queremos que disfrutes de nuestra comunidad, pero en caso de uso
          indebido de nuestro sitio web y plataforma e-learning, podríamos
          suspender o cancelar tu cuenta. Si esto sucediera, te informaremos
          sobre los motivos y opciones disponibles.
          <br />
          <br />
          Escuela de Libertad se reserva el derecho de suspender o cancelar
          cuentas en los siguientes casos:
          <br />
          <br />
          <div className="mb-6">
            <ul className="list-disc ml-6">
              <li>Uso indebido de la plataforma.</li>
              <li>Incumplimiento de las normas de conducta.</li>
              <li>
                Detección de actividades fraudulentas o acceso no autorizado.
              </li>
            </ul>
          </div>
        </div>
        <p className="font-semibold mb-2">
          5. Convivencia en el sitio web y plataforma e-learning
        </p>
        <p className="pl-8 font-semibold">
          5.1. Principios generales
          <br /> <br />
        </p>
        <p className="mb-6">
          Queremos que Escuela de Libertad sea un espacio seguro y enriquecedor
          para todos. Para ello, te pedimos que utilices nuestro sitio web y
          plataforma e-learning de manera ética, respetuosa y conforme a la
          legalidad vigente.
        </p>
        <p className="pl-8 font-semibold">
          5.2. Conductas no admitidas
          <br /> <br />
        </p>
        <div className="mb-6">
          Para mantener un ambiente positivo, no se permite:
          <br />
          <br />
          <ul className="list-disc ml-6">
            <li>
              Publicar contenido ofensivo, discriminatorio o que incite a la
              violencia.
            </li>
            <li>
              Enviar spam, publicidad no solicitada o cualquier otra forma de
              comunicación comercial no autorizada.
            </li>
            <li>
              Interferir en el funcionamiento de la plataforma mediante ataques
              informáticos o cualquier otra acción malintencionada.
            </li>
          </ul>
          <br />
          Si observas alguna situación que afecte la convivencia, por favor
          repórtala a{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>{" "}
          para que podamos revisarla y tomar las medidas adecuadas.
        </div>
        <p className="font-semibold mb-2">6. Limitación de responsabilidad</p>

        <p className="mb-6">
          Nos esforzamos por ofrecerte una plataforma accesible y segura. Sin
          embargo, en ocasiones pueden surgir incidencias técnicas o
          interrupciones en el servicio.
          <br />
          <br />
          Además, no somos responsables por el uso incorrecto o indebido que
          hagas de los contenidos ofrecidos.
          <br />
          <br />
          Si en algún momento experimentas dificultades o identificas alguna
          irregularidad en este sentido, contáctanos a{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>{" "}
          y haremos todo lo posible por ayudarte.
        </p>
        <p className="font-semibold mb-2">
          7. Protección de datos y privacidad
        </p>

        <p className="mb-6">
          Respetamos tu privacidad y protegemos tus datos personales conforme a
          la legislación vigente. Si deseas conocer más sobre cómo tratamos tus
          datos, puedes consultar nuestra Política de Privacidad.
        </p>
        <p className="font-semibold mb-2">8. Política de Cookies</p>

        <p className="mb-6">
          Utilizamos cookies para mejorar tu experiencia en la plataforma y
          ofrecerte contenido relevante. Puedes gestionar tus preferencias en la
          configuración de tu navegador. Más información en nuestra Política de
          Cookies.
        </p>
        <p className="font-semibold mb-2">
          9. Modificaciones y actualizaciones
        </p>

        <p className="mb-6">
          Si realizamos cambios en esta Política para adaptarla a modificaciones
          normativas así como a mejores prácticas, lo informaremos en nuestro
          sitio web y plataforma e-learning para que puedas revisar las
          actualizaciones.
        </p>
        <p className="font-semibold mb-2">10. Contacto</p>
        <p className="mb-6">
          Si tienes dudas sobre esta Política o necesitas asistencia, estamos
          aquí para ayudarte. Puedes comunicarte con nosotros a través de:{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="w-full text-center italic">
          Fecha de última actualización: 09 de febrero de 2025
        </p>
        {/* POLÍTICA DE COOKIES*/}
        <h2 className="w-full text-center font-semibold my-10">
          POLÍTICA DE COOKIES
        </h2>
        <p className="font-semibold mb-2">
          1. ¿Qué son las cookies y para qué las utilizamos?
        </p>

        <div className="mb-6">
          En Escuela de Libertad, queremos ofrecerte la mejor experiencia
          posible en nuestro sitio web y plataforma e-learning. Para ello,
          utilizamos cookies, pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas nuestro sitio web y plataforma e-learning.
          <br />
          <br />
          Las cookies nos ayudan a:
          <br />
          <ul className="list-disc ml-6">
            <li>
              Recordar tus preferencias y mejorar tu experiencia de navegación.
            </li>
            <li>Analizar el uso de la plataforma para seguir mejorando.</li>
            <li>Garantizar el correcto funcionamiento del sitio.</li>
          </ul>
          <br />
          Puedes decidir en cualquier momento cómo quieres que gestionemos estas
          cookies.
        </div>
        <p className="font-semibold mb-2">2. Tipos de cookies que utilizamos</p>

        <div className="mb-6">
          Nuestro sitio web y plataforma e-learning utilizan diferentes tipos de
          cookies según su finalidad:
          <br />
          <br />
          Las cookies nos ayudan a:
          <br />
          <ul className="list-disc ml-6">
            <li>
              <span className="italic">Cookies esenciales (necesarias):</span>{" "}
              Permiten el funcionamiento básico del sitio web y la plataforma
              e-learning, como el inicio de sesión y la seguridad. Sin ellas, la
              plataforma no podría funcionar correctamente.
            </li>
            <li>
              <span className="italic">Cookies de análisis:</span> Nos ayudan a
              entender cómo utilizas la plataforma de forma anónima, para
              mejorar continuamente la experiencia de aprendizaje.
            </li>
            <li>
              <span className="italic">Cookies de personalización:</span>{" "}
              Guardan tus preferencias para que la navegación sea más fluida y
              adaptada a tus necesidades.
            </li>
            <li>
              <span className="italic">Cookies publicitarias:</span> Facilitan
              la personalización de anuncios para que recibas contenido más
              relevante para ti.
            </li>
          </ul>
          <br />
        </div>
        <p className="font-semibold mb-2">
          3. ¿Cómo puedes gestionar o desactivar las cookies?
        </p>

        <div className="mb-6">
          Al ingresar a nuestro sitio web y plataforma e-learning, puedes
          aceptar todas las cookies o configurar tus preferencias según lo que
          consideres mejor para ti.
          <br />
          <br />
          Si en algún momento deseas cambiar tu configuración, puedes hacerlo
          desde los ajustes de tu navegador:
          <br />
          <br />
          <br />
          <ul className="list-disc ml-6">
            <li>
              Google Chrome:{" "}
              <Link
                className="underline text-blue-500"
                href="https://support.google.com/accounts/answer/61416?hl=es&co=GENIE.Platform%3DDesktop"
              >
                Instrucciones
              </Link>
            </li>
            <li>
              Mozilla Firefox:{" "}
              <Link
                className="underline text-blue-500"
                href="https://support.mozilla.org/es/kb/Borrar%20cookies"
              >
                Instrucciones
              </Link>
            </li>
            <li>
              Safari:{" "}
              <Link
                className="underline text-blue-500"
                href="https://support.apple.com/es-es/105082"
              >
                Instrucciones
              </Link>
            </li>
            <li>
              Microsoft Edge:{" "}
              <Link
                className="underline text-blue-500"
                href="https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-ver-permitir-bloquear-eliminar-y-usar-168dab11-0753-043d-7c16-ede5947fc64d"
              >
                Instrucciones
              </Link>
            </li>
          </ul>
          <br />
          Si decides bloquear algunas cookies, es posible que algunas funciones
          de nuestro sitio web y plataforma e-learning no estén disponibles o no
          se comporten como esperas.
        </div>
        <p className="font-semibold mb-2">
          4. Modificaciones y actualizaciones
        </p>

        <p className="mb-6">
          Si realizamos cambios en esta Política para adaptarla a modificaciones
          normativas así como a mejores prácticas, lo informaremos en nuestro
          sitio web y plataforma e-learning para que puedas revisar las
          actualizaciones.
        </p>
        <p className="mb-6">
          Si tienes alguna duda sobre nuestra Política de Cookies, puedes
          escribirnos a:{" "}
          <a href="mailto:teconchen@gmail.com" className="underline">
            teconchen@gmail.com
          </a>
        </p>
        <p className="w-full text-center italic">
          Fecha de última actualización: 09 de febrero de 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
