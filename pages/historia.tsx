import React from "react"
import {VStack, Container, Text} from "@chakra-ui/react"
import {motion} from "framer-motion"

import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

const MotionText = motion(Text)

const Historia: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  React.useEffect(() => {
    if (page !== Page.TenisDeMesa) changePage(Page.TenisDeMesa)
  }, [page, changePage])

  return (
    <>
      <Head description="Historia del tenis de mesa" siteTitle="ABTM" title="Historia" />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflowX="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" paddingBottom={10} paddingTop={[8, null, 24]}>
          <VStack minH="100vh" p={2} spacing={20} w="100%">
            <MotionText
              as="h2"
              fontSize="6xl"
              fontWeight="bold"
              initial={{opacity: 0, y: 20}}
              textAlign="center"
              transition={{duration: 0.5}}
              viewport={{once: true}}
              whileInView={{opacity: 1, y: 0}}
            >
              Historia
            </MotionText>
            <VStack fontSize="xl" spacing={10} textAlign="justify">
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`Los principios del Tenis de Mesa son oscuros y no se sabe con certeza cuando se practicó por primera vez. 
            Fue en la década de 1870 cuando el deporte surgió en Inglaterra como una derivación del Tenis. 
            Es posible que jugadores de Tenis ante la adversa climatología inventaran una especie de Tenis en 
            miniatura utilizando una mesa de billar o de comedor, en un Club de Tenis, 
            y dividiéndola en dos campos con libros o simultáneamente con una cuerda.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`Como pelotas servirían algunos de los muchos modelos existentes para juegos infantiles, 
            o incluso tapones de corcho convenientemente adaptados. 
            Las raquetas serían tapas de cajas de puros o batel infantiles. 
            Indudablemente se mezcla la leyenda con la realidad. Por esta versión se inclinan Gerald Gurney y Ron Crayen, 
            dos profundos estudiosos en la historia del Tenis de Mesa. Los estudiantes universitarios adoptaron 
            rápidamente el entonces juego de salón en toda Inglaterra. En 1884 la firma F.H. Ayres Ltda. 
            ya comerciaba un Juego de Tenis de Salón de miniatura". En julio de 1890 el industrial de Yorkshire, 
            David Forster patentó un Juego de mesa para sala", el cual se trataba de una mesa rodeada con una especie 
            de valla para mantener la pelota dentro de unos limites, no existiendo evidencias de su comercialización.`}
              </MotionText>

              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En 1891 Jhon Jaques, fabricante de artículos deportivos, patentó un juego llamado "Sgossima", 
              el cual no tuvo aceptación. En 1891 Charles Barter, de Glouchestershire, registró una patente con pelotas de corcho, 
              y por la misma fecha James Gibb, atleta famoso fundador de la A.A.A., improvisó un material que consistía en una red 
              fija a dos postes y sobre una superficie de madera elevada del suelo, inventando un juego de 21 puntos y con pelotas de goma. 
              Gibb encontró en América pequeñas pelotas de celuloide, introduciéndolas en el juego con un éxito inmediato. 
              Wiames Gibb sugirió el nombre de Ping Pong a la firma Jhon Jaques LTDA., la cual registró el nombre.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`El nombre viene por el sonido de Ping que hacía la pelota de celuloide al impactar con las raquetas recubiertas 
              en pergamino y el sonido Pong al contacto de la pelota con la mesa. 
              Estas raquetas de pergamino tenían un mango de 45 cm de longitud. 
              En el año 1899 el Ping-Pong alcanzó una gran popularidad en Inglaterra, exportándose incluso, 
              por la firma Jonh Jaques, Ltda., a la Indica, África del Sur y Australia. Por estas fechas fabricantes rivales de Jhon Jaques Ltda., 
              alcanzaron el "Whiff Whaff" y el "Flin Flan", pero el nombre de Ping-Pong se impuso.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En 1899 un alumno de 14 años de la Escuela de Satffs, A. T. Finney, inventó una raqueta de mango corto y recubierta de pergamino, 
              introduciendo en el juego una red de 17,5 cm de altura. También en este año comienza a jugar el joven londinense Percy Bronfield, 
              el cual desempeñarla posteriormente un papel decisivo en el impuso del Tenis de Mesa inglés y mundial. Los mayores entusiastas 
              del nuevo juego eran los deportista de la hípica y así grandes jugadores del Tenis como J.G. Ritchie y C.G. 
              Eames fueron Secretarios de Clubes de Tenis de Mesa, teniendo escritos libros sobre este deporte.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`Ya en 1901 se celebraron en Inglaterra Torneos de Ping-Pong con participación de hasta 300 jugadores y con premios en metálico 
            por importe de hasta 25 libras. En este año se constituye en Inglaterra la Asociación de Ping Pong, la cual contaba con unos 500 jugadores 
            pertenecientes a 39 Clubes distribuidos por todo el país. En estas fechas iniciales el servicio se hacia directamente por encima de la red, 
            como el Tenis, teniendo esta una altura de 17 cm y de 17,5 cm, variable. Los Juegos de Dobles eran designados por el nombre de "Juego a cuatro manos". 
            En Brantham Essex se producía, según una información de la época. ó toneladas de pelotas de celuloide a la semana 
            (2 1/2 millones de unidades aproximadamente), distribuyéndose por todo el mundo.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En 1902 comenzó a publicarse el periódico semanal que llevaba el nombre de Table Tennis Pioneer (Pionero del Tenis de Mesa), 
              el cual se enorgullecía ese mismo año de haber alcanzado la cifra de 20.000 lectores. También en 1902 se habían editado en Inglaterra 
              y en EE.UU. unos 20 libros con instrucciones del juego. Los principales jugadores ingleses de la época, que desempeñarían un gran 
              papel en la evolución del Tenis de Mesa mundial fueron A. Parker, P. Bronfield, P.E. Warden, G.J. Ross, J.J. Payme, 
              J. Thompson, E.C. Goode y A.T. Finney.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`El primer punteado cubierto de caucho o goma fue patentado por Frank Bryan en 1901 y vendido bajo el nombre de "Atropos". 
              Este tipo de raqueta fue adoptado casi universalmente durante muchos años. Salió también la raqueta de aluminio, 
              garantizando gran rapidez, pero era muy cara y no se vendía. Ayres y G.G. Bussey fabricaron raquetas acordonadas, 
              como las de Tenis, en miniatura. Eran de fabricacion muy esmerada y utilizaban cordones muy tensos y de gran calidad, 
              pero tenían el inconveniente de que no ofrecían buen control sobre la pelota y fueron prohibidas en muchos Torneos, 
              probablemente porque no producía ruido alguno. La primitivas pelotas de celuloide eran excesivamente ligeras y además 
              tenían la desventaja de que, como se fabricaban en dos partes que luego se unían, la junta producía un bote muy inconsistente. 
              En 1900 Jaques Ltda. fabricaba una pelota de celuloide sin costura y normalizada en tamaño y forma. Las pelotas fueron 
              adquiriendo dureza y además incrementaron el tamaño, circunstancia que facilitaba un juego rápido. Los accesorios para jugar, 
              excepto la raqueta, se vendían en estuches fabricados principalmente en Inglaterra y en EE.UU.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En 1922 ya se conocía el nuevo deporte en Suecia, Francia, Gales, Centro Europa, etc. 
              estando regulado en estos países y jugándose Campeonatos asiduamente.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En 1926 se funda la Asociación Inglesa de Tenis de Mesa con nuevas reglas y estatutos, eligiéndose como Presidente 
              a Ivor Montagu y como Secretario a Bill Pope. Cuando se fundo esta Asociación, tanto Montagu como Pope emprendieron 
              la tarea de organizar el I Campeonato del Mundo en Londres, el cual tuvo un gran éxito y se resolvió económicamente 
              en este año 1926 con 300 Libras de pérdidas. La idea del Campeonato mencionado surgió con motivo de un Torneo Internacional 
              organizado en Berlín por el Doctor Lehmann, participando alemanes, austríacos, húngaros e ingleses. En este Torneo se habló 
              de la necesidad de constituir una Federación Internacional de Tenis de Mesa de forma provisional y la organización del I Campeonato 
              del Mundo y de un Congreso, ambos en Londres. Celebrado el Congreso se constituye oficialmente la Federación Internacional 
              de Tenis de Mesa (I.T.T.F.), nombrándose Presidente a Ivor Montagu y Secretario a Bill Pope, 
              el cual lo sería hasta su muerte prematura en 1950.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En este primer Campeonato del Mundo se dona por Lady Swaythling, madre de Montegu, la Copa que lleva su nombre para ser 
              disputada por Equipos Masculinos. Participan Hungría, Austria, Inglaterra, India, País de Gales, Checoslovaquia y Alemania. 
              En principio la denominación no iba a ser la de Campeonato del Mundo, pero la participación de ocho jugadores indios, 
              residentes en realidad en Inglaterra, condujo a los organizadores a darle este nombre. La participación femenina fue muy baja, 
              pues se redujo a 14 jugadoras: 11 inglesas, 2 austríacas y 1 húngara. Estos primeros Campeonatos vieron el triunfo total de 
              los representantes de Hungría, los cuales se alzaron con todos sus triunfos. El Campeonato se jugo en ó mesas, y la altura 
              de la red erra de 17 cm, lo cual favorecía al jugador defensivo, limitándose prácticamente todos los participantes a enviar 
              la pelota al otro lado de la red en actitudes puramente defensivas. La Organización de este primer Campeonato recomendaba 
              a los jugadores el no usar prendas de color blanco, pero no impedía que la vestimenta fuera poco deportiva, pues los hombres 
              utilizaban pantalones largos, camisas de manga larga y además chalecos, e incluso en algunos casos corbatas, y las mujeres 
              faldas largas y vestidos normales de calle. La primera decisión del Congreso de Londres fue la de intentar unificar las reglas 
              que entonces imperaban en el Tenis de Mesa. En el I Campeonato del Mundo se había jugado en Equipos a 21 tantos cada juego 
              y al mejor de tres juegos, y en individuales al mejor de cinco juegos. La l.T.T.F. hace oficiales para 1927 dos sistemas diferentes: 
              el sistema de contar hasta 21 tantos en cada juego y que era defendido por los ingleses, y el sistema de Tenis de Campo 
              en sets de seis juegos, sistema preconizado por húngaros, austríacos y alemanes.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`En enero de 1928, durante los Campeonatos del Mundo celebrados en Estocolmo, fue tomada la decisión de unificar el sistema 
              y contar hasta 21 tantos. Con la celebración del I Campeonato del Mundo y del Congreso de Londres, 
              se cierra una etapa y comienza otra. Es deporte olímpico desde el año 1988.`}
              </MotionText>
              <MotionText initial={{opacity: 0}} viewport={{once: true}} whileInView={{opacity: 1}}>
                {`China es la mayor potencia en este deporte, aunque durante de la década de los 90 Suecia llegó a superarles 
              gracias a sus jugadores Jan-Ove Waldner (considerado por muchos el mejor jugador de la historia), 
              Jorgen Persson, Mikael Appelgreen y Peter Karlson.`}
              </MotionText>
            </VStack>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default Historia
