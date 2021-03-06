import React from "react"
import {Center, Container, Text, VStack, List, ListItem, Grid} from "@chakra-ui/react"
import Link from "next/link"
import {motion} from "framer-motion"

import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Head from "../components/Head"
import {useChangePage, usePage} from "../context/hooks"
import {Page} from "../types/types"

const rules = [
  "La mesa",
  "El conjunto de la red",
  "La pelota",
  "La raqueta",
  "Definiciones",
  "Servicio correcto",
  "Devolucion correcta",
  "Orden del juego",
  "Anulacion",
  "Tanto",
  "Juego",
  "Partido",
  "Orden del servicio, resto y lados",
  "Errores en el orden de servicio, resto o lados",
  "Regla de aceleracion",
]

const MotionText = motion(Text)
const MotionGrid = motion(Grid)
const MotionVStack = motion(VStack)

const Reglamento: React.FC = () => {
  const changePage = useChangePage()
  const page = usePage()

  const animation = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0},
  }

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  React.useEffect(() => {
    if (page !== Page.TenisDeMesa) changePage(Page.TenisDeMesa)
  }, [page, changePage])

  return (
    <>
      <Head description="Reglamento de tenis de mesa" siteTitle="ABTM" title="Reglamento" />
      <VStack
        bg="#FBFBFB"
        color="#242424"
        minHeight="100vh"
        overflowX="hidden"
        spacing="0px"
        w="100%"
      >
        <Menu />
        <Container maxW="8xl" minH="100vh" paddingBottom={10} paddingTop={[8, null, 24]}>
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
              Reglamento del Tenis de Mesa
            </MotionText>
            <MotionGrid
              gap={4}
              initial="hidden"
              m="auto"
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(5, 1fr)",
                "repeat(8, 1fr)",
              ]}
              variants={container}
              viewport={{once: true}}
              w="100%"
              whileInView="show"
            >
              {rules.map((rule) => (
                <MotionVStack key={rule} variants={animation} w="100%">
                  <Link key={rule} passHref href={`#${rule}`}>
                    <a style={{width: "100%"}}>
                      <Center
                        _hover={{backgroundColor: "orange"}}
                        bg="#FFC727"
                        borderRadius="lg"
                        p={2}
                        transition="ease-in 0.3s"
                      >
                        <Text fontSize="sm" fontWeight="semibold" textAlign="center">
                          {rule}
                        </Text>
                      </Center>
                    </a>
                  </Link>
                </MotionVStack>
              ))}
            </MotionGrid>
            <MotionVStack
              alignItems="start"
              id="La%20mesa"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: 0.1}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                La mesa
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    La superficie superior de la mesa, conocida como superficie de juego, ser??
                    rectangular, con una longitud de 2,74 m y una anchura de 1,525 m, y estar??
                    situada en un plano horizontal a 76 cm del suelo.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La superficie de juego no incluye los laterales de la parte superior de la mesa.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La superficie de juego puede ser de cualquier material y proporcionar?? un bote
                    uniforme de, aproximadamente, 23 cm al dejar caer sobre ella una pelota
                    reglamentaria desde una altura de 30 cm.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La superficie de juego ser?? de color oscuro, uniforme y mate, con una l??nea
                    lateral blanca de 2 cm de anchura a lo largo de cada borde de 2,74 m, y una
                    l??nea de fondo blanca de 2 cm de anchura a lo largo de cada borde de 1,525 m.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La superficie de juego estar?? dividida en dos campos iguales por una red
                    vertical paralela a l as l??neas de fondo y ser?? continua en toda el ??rea de cada
                    campo.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Para dobles, cada campo estar?? dividido en dos medios campos iguales por una
                    l??nea central blanca de 3 mm de anchura y paralela a las l??neas laterales; la
                    l??nea central ser?? considerada como parte de cada medio campo derecho.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="El%20conjunto%20de%20la%20red"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                El conjunto de la red
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    El conjunto de la red consistir?? en la red, su suspensi??n y los soportes,
                    incluyendo las fijaciones que los sujetan a la mesa.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La red estar?? suspendida de una cuerda sujeta en cada uno de sus extremos a un
                    soporte vertical de 15,25 cm de altura; el l??mite exterior de los soportes
                    estar?? a 15,25 cm por fuera de las l??neas laterales.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La parte superior de la red estar??, en toda su longitud, a 15,25 cm sobre la
                    superficie de juego.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La parte inferior de la red deber?? estar, en toda su longitud lo m??s cerca
                    posible de la superficie de juego, y los extremos de la red lo m??s cerca posible
                    de los soportes.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="La%20pelota"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                La pelota
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>La pelota ser?? esf??rica, con un di??metro de 40 mm.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>La pelota pesar?? 2,7 g.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La pelota ser?? de celuloide o de un material pl??stico similar, blanca o naranja,
                    y mate.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="La%20raqueta"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                La raqueta
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    La raqueta puede ser de cualquier tama??o, forma o peso, pero la hoja deber?? ser
                    plana y r??gida.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Como m??nimo, el 85% del grosor de la hoja ser?? de madera natural; la hoja puede
                    estar reforzada en su interior con una capa adhesiva de un material fibroso tal
                    como fibra de carbono, fibra de vidrio o papel prensado, pero sin sobrepasar el
                    7,5% del grosor total ?? 0,35 mm, siempre la dimensi??n inferior.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El lado de la hoja usado para golpear la pelota estar?? cubierto, bien con goma
                    de picos normal con los picos hacia fuera y un grosor total no superior a 2 mm
                    incluido el adhesivo, o bien con goma s??ndwich con los picos hacia dentro o
                    hacia fuera y un grosor total no superior a 4 mm incluido el adhesivo.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La goma de picos normal es una capa sencilla de goma no celular, natural o
                    sint??tica, con picos distribuidos de manera uniforme por su superficie, con una
                    densidad no inferior a 10 por cm2 ni superior a 50 por cm2.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La goma s??ndwich es una capa sencilla de goma celular, cubierta exteriormente
                    por una capa sencilla de goma de picos normal; el grosor de la goma de picos no
                    debe sobrepasar los 2 mm.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El recubrimiento llegar?? hasta los l??mites de la hoja, pero sin sobrepasarlos,
                    si bien la parte m??s cercana al mango y que se sujeta con los dedos puede quedar
                    al descubierto o cubrirse con cualquier material.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La hoja, cualquier capa en su interior y todo recubrimiento o capa adhesiva en
                    el lado usado para golpear la pelota, ser??n continuos y de grosor uniforme.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La superficie del recubrimiento de los lados de la hoja, o la de un lado si ??ste
                    queda sin cubrir, ser?? mate, de color rojo vivo por un lado y negro por el otro.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Pueden permitirse leves alteraciones en la continuidad de la superficie, o en la
                    uniformidad de su color, debidas a roturas accidentales o uso, siempre y cuando
                    las caracter??sticas de la superficie no sufran cambios significativos.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Al comienzo de un partido, y siempre que cambie de raqueta durante el mismo, un
                    jugador mostrar?? a su contrincante y al ??rbitro la raqueta que va a usar, y
                    permitir?? que la examinen.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Definiciones"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Definiciones
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>Una jugada es el per??odo durante el cual est?? en juego la pelota.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    La pelota est?? en juego desde el ??ltimo momento en que permanece inm??vil en la
                    palma de la mano libre antes de ser puesta en servicio intencionadamente hasta
                    que la jugada se decide como tanto o anulaci??n.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>Una anulaci??n es una jugada cuyo resultado no es anotado.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>Un tanto es una jugada cuyo resultado es anotado.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>La mano de la raqueta es la mano que empu??a la raqueta.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>La mano libre es la mano que no empu??a la raqueta.</Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Un jugador golpea la pelota si, estando en juego, la toca con su raqueta
                    empu??ada con la mano, o con la misma mano por debajo de la mu??eca.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Un jugador obstruye la pelota si ??l, o cualquier cosa que vista o lleve, la toca
                    cuando est?? por encima de la superficie de juego o se est?? dirigiendo hacia ??sta
                    y no ha sobrepasado su l??nea de fondo, no habiendo tocado su campo desde la
                    ??ltima vez que fue golpeada por su oponente.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El servidor es el jugador que ha de golpear en primer lugar la pelota en una
                    jugada.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El restador es el jugador que ha de golpear en segundo lugar la pelota en una
                    jugada.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El ??rbitro es la persona designada para dirigir un partido o encuentro.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    El ??rbitro asistente es la persona designada para asistir al ??rbitro en ciertas
                    decisiones.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Lo que un jugador viste o lleva incluye todo lo que vest??a o llevaba al comienzo
                    de la jugada, excluida la pelota.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Se considera que la pelota pasa por encima o alrededor del conjunto de la red si
                    pasa por cualquier lugar que no sea entre la red y los soportes de ??sta, o entre
                    la red y la superficie de juego.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Se considera que la l??nea de fondo se prolonga indefinidamente en ambas
                    direcciones.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack alignItems="start" id="Servicio%20correcto" w={["90%", null, "100%"]}>
              <Text fontSize="4xl" fontWeight="bold">
                Servicio correcto
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    El servicio comenzar?? con la pelota descansando libremente sobre la palma
                    abierta e inm??vil de la mano libre del servidor.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Despu??s, el servidor lanzar?? la pelota hacia arriba lo m??s verticalmente
                    posible, sin imprimirle efecto, de manera que se eleve al menos 16 cm tras salir
                    de la palma de la mano libre y luego caiga sin tocar nada antes de ser golpeada.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Cuando la pelota est?? descendiendo, el servidor la golpear?? de forma que toque
                    primero su campo y despu??s de pasar por encima o alrededor del conjunto de la
                    red, toque directamente el campo del restador; en dobles, la pelota tocar??
                    sucesivamente el medio campo derecho del servidor y del restador.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Desde el comienzo del servicio hasta que es golpeada, la pelota estar?? por
                    encima del nivel de la superficie de juego y por detr??s de la l??nea de fondo del
                    servidor, y no ser?? escondida al restador por ninguna parte del cuerpo o
                    vestimenta del servidor o su compa??ero de dobles.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Es responsabilidad del jugador servir de forma que el ??rbitro o ??rbitro
                    asistente pueda ver que cumple con los requisitos de un buen servicio.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Si no hay ??rbitro asistente y el ??rbitro est?? dudoso sobre la legalidad de un
                    servicio, puede, en la primera ocasi??n de un partido, advertir al servidor sin
                    conceder un tanto.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Si posteriormente en el partido, un servicio del jugador o de su compa??ero de
                    dobles es de dudosa legalidad, por la misma o cualquier otra raz??n, el restador
                    ganar?? un tanto.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Siempre que haya un claro incumplimiento de los requisitos de un servicio
                    correcto no se dar?? advertencia alguna y el restador ganar?? un tanto.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    Excepcionalmente, el ??rbitro podr?? atenuar los requisitos para un servicio
                    correcto cuando ??l considere que una determinada discapacidad f??sica impide su
                    cumplimiento.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Devolucion%20correcta"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Devoluci??n correcta
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    Tras haber sido servida o devuelta, la pelota ser?? golpeada de forma que pase
                    por encima o alrededor del conjunto de la red y toque el campo del oponente,
                    bien sea directamente o tras haber tocado el conjunto de la red.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Orden%20del%20juego"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Orden de juego
              </Text>
              <List styleType="circle">
                <ListItem p={2}>
                  <Text>
                    En individuales, el servidor har?? primero un servicio correcto; el restador har??
                    entonces una devoluci??n correcta, y en lo sucesivo, servidor y restador har??n
                    devoluciones correctas alternativamente.
                  </Text>
                </ListItem>
                <ListItem p={2}>
                  <Text>
                    En dobles, el servidor har?? primero un servicio correcto; el restador har??
                    entonces una devoluci??n correcta; el compa??ero del servidor har?? entonces una
                    devoluci??n correcta; el compa??ero del restador har?? entonces una devoluci??n
                    correcta, y en lo sucesivo, cada jugador, por turno y en este orden, har?? una
                    devoluci??n correcta.
                  </Text>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Anulacion"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Anulaci??n
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  <VStack alignItems="start" w="100%">
                    <Text>La jugada ser?? anulada:</Text>
                    <List styleType="disc">
                      <ListItem>
                        si, en el servicio, la pelota toca el conjunto de la red al pasar por encima
                        o alrededor de ella, siempre y cuando, por lo dem??s, el servicio sea
                        correcto o si la pelota es obstruida por el restador o su compa??ero;
                      </ListItem>
                      <ListItem>
                        si se efect??a el servicio cuando el restador o pareja restadora no est??n
                        preparados, siempre que ni el restador ni su compa??ero intenten golpear la
                        pelota;
                      </ListItem>
                      <ListItem>
                        si los fallos en el servicio o al hacer una devoluci??n correcta, o cualquier
                        otro cumplimiento de las Reglas, se deben a alteraciones fuera del control
                        del jugador;
                      </ListItem>
                      <ListItem>si el ??rbitro o ??rbitro asistente interrumpen el juego.</ListItem>
                    </List>
                  </VStack>
                </ListItem>
                <ListItem p={2}>
                  <VStack alignItems="start" w="100%">
                    <Text>Se puede interrumpir el juego:</Text>
                    <List styleType="disc">
                      <ListItem>
                        para corregir un error en el orden de servicio, resto o lados;
                      </ListItem>
                      <ListItem>para introducir la regla de aceleraci??n;</ListItem>
                      <ListItem>para amonestar o penalizar a un jugador;</ListItem>
                      <ListItem>
                        cuando las condiciones de juego son perturbadas de forma tal que pudieran
                        afectar al resultado de la jugada.
                      </ListItem>
                    </List>
                  </VStack>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Tanto"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Tanto
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  <VStack alignItems="start" w="100%">
                    <Text>A menos que la jugada sea anulada, un jugador ganar?? un tanto:</Text>
                    <List styleType="disc">
                      <ListItem>si su oponente no hace un servicio correcto;</ListItem>
                      <ListItem>si su oponente no hace una devoluci??n correcta;</ListItem>
                      <ListItem>
                        si, tras haber realizado un servicio correcto o una devoluci??n correcta, la
                        pelota toca cualquier cosa, excepto el conjunto de la red, antes de ser
                        golpeada por su oponente;
                      </ListItem>
                      <ListItem>
                        si la pelota pasa m??s all?? de su l??nea de fondo sin haber tocado su campo,
                        tras ser golpeada por su oponente;
                      </ListItem>
                      <ListItem>si su oponente obstruye la pelota;</ListItem>
                      <ListItem>si su oponente golpea la pelota dos veces consecutivas;</ListItem>
                      <ListItem>
                        si su oponente golpea la pelota con un lado de la hoja de la raqueta cuya
                        superficie no cumple los requisitos indicados en los art??culos 2.4.3, 2.4.4
                        y 2.4.5;
                      </ListItem>
                      <ListItem>
                        si su oponente, o cualquier cosa que ??ste vista o lleve, mueve la superficie
                        de juego;
                      </ListItem>
                      <ListItem>
                        si su oponente, o cualquier cosa que ??ste vista o lleve, toca el conjunto de
                        la red;
                      </ListItem>
                      <ListItem>
                        si su oponente toca la superficie de juego con la mano libre;
                      </ListItem>
                      <ListItem>
                        si en dobles uno de los oponentes golpea la pelota fuera del orden
                        establecido por el primer servidor y el primer restador;
                      </ListItem>
                      <ListItem>de acuerdo con lo estipulado en la regla de aceleraci??n.</ListItem>
                    </List>
                  </VStack>
                </ListItem>
                <ListItem p={2}>
                  <VStack alignItems="start" w="100%">
                    <Text>Se puede interrumpir el juego:</Text>
                    <List styleType="disc">
                      <ListItem>
                        para corregir un error en el orden de servicio, resto o lados;
                      </ListItem>
                      <ListItem>para introducir la regla de aceleraci??n;</ListItem>
                      <ListItem>para amonestar o penalizar a un jugador;</ListItem>
                      <ListItem>
                        cuando las condiciones de juego son perturbadas de forma tal que pudieran
                        afectar al resultado de la jugada.
                      </ListItem>
                    </List>
                  </VStack>
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Juego"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Juego
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  Ganar?? un juego el jugador o pareja que primero alcance 11 tantos, excepto cuando
                  ambos jugadores o parejas consigan 10 tantos; en este caso, ganar?? el juego el
                  primer jugador o pareja que posteriormente obtenga 2 tantos de diferencia.
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Partido"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Partido
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  Un partido se disputar?? al mejor de cualquier n??mero impar de juegos.
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Orden%20del%20servicio,%20resto%20y%20lados"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Orden del servicio, resto y lados
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  El derecho a elegir el orden inicial de servir, restar o lado de la mesa ser??
                  decidido por sorteo, y el ganador puede elegir servir o restar primero, o empezar
                  en un determinado lado de la mesa.
                </ListItem>
                <ListItem p={2}>
                  Cuando un jugador o pareja ha elegido servir o restar primero, o empezar en un
                  lado determinado, el otro jugador o pareja tendr?? la otra elecci??n.
                </ListItem>
                <ListItem p={2}>
                  Despu??s de cada 2 tantos anotados, el restador o pareja restadora pasar?? a ser el
                  servidor o pareja servidora, y as?? hasta el final del juego, a menos que ambos
                  jugadores o parejas hayan anotado 10 tantos o est?? en vigor la regla de
                  aceleraci??n. En estos ??ltimos casos, el orden del servicio y del resto ser?? el
                  mismo, pero cada jugador servir?? tan s??lo un tanto alternativamente.
                </ListItem>
                <ListItem p={2}>
                  En cada juego de un partido de dobles, la pareja que tiene el derecho a servir en
                  primer lugar elegir?? cu??l de los dos jugadores lo har?? primero, y en el primer
                  juego de un partido la pareja restadora decidir?? cu??l de los dos jugadores restar??
                  primero; en los siguientes juegos del partido, una vez elegido el primer servidor,
                  el primer restador ser?? el jugador que le serv??a en el juego anterior.
                </ListItem>
                <ListItem p={2}>
                  En dobles, en cada cambio de servicio, el anterior restador pasar?? a ser servidor,
                  y el compa??ero del anterior servidor pasar?? a ser restador.
                </ListItem>
                <ListItem p={2}>
                  El jugador o pareja que sirva primero en un juego restar?? en primer lugar en el
                  siguiente juego del partido. En el ??ltimo juego posible de un partido de dobles,
                  la pareja restadora cambiar?? su orden de recepci??n cuando la primera de las
                  parejas anote 5 tantos.
                </ListItem>
                <ListItem p={2}>
                  El jugador o pareja que comienza un juego en un lado de la mesa comenzar?? el
                  siguiente juego del partido en el otro lado, y en el ??ltimo juego posible de un
                  partido, los jugadores o parejas cambiar??n de lado cuando el primero de los
                  jugadores o parejas anote 5 tantos.
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Errores%20en%20el%20orden%20de%20servicio,%20resto%20o%20lados"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Errores en el orden del servicio, resto o lados
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  Si un jugador sirve o resta fuera de su turno, el juego ser?? interrumpido por el
                  ??rbitro tan pronto como se advierta el error, y se reanudar?? sirviendo y restando
                  con aquellos jugadores que deber??an servir y restar respectivamente seg??n el
                  tanteo alcanzado, de acuerdo con el orden establecido al principio del partido; en
                  dobles, el juego se reanudar?? con el orden de servicio elegido por la pareja que
                  ten??a derecho a servir primero en el juego durante el cual es advertido el error.
                </ListItem>
                <ListItem p={2}>
                  Si los jugadores no cambiaron de lado cuando deb??an haberlo hecho, el juego ser??
                  interrumpido por el ??rbitro tan pronto como se advierta el error, y se reanudar??
                  con los jugadores en los lados en que deber??an estar seg??n el tanteo alcanzado, de
                  acuerdo con el orden establecido al comienzo del partido.
                </ListItem>
                <ListItem p={2}>
                  En cualquier caso, todos los tantos conseguidos antes de advertirse un error ser??n
                  v??lidos.
                </ListItem>
              </List>
            </MotionVStack>
            <MotionVStack
              alignItems="start"
              id="Regla%20de%20aceleracion"
              initial={{opacity: 0, y: 20}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              w={["90%", null, "100%"]}
              whileInView={{opacity: 1, y: 0}}
            >
              <Text fontSize="4xl" fontWeight="bold">
                Regla de aceleraci??n
              </Text>
              <List styleType="circle" w="100%">
                <ListItem p={2}>
                  Excepto que ambos jugadores o parejas hayan llegado al menos a 9 tantos, la regla
                  de aceleraci??n entrar?? en vigor si un juego no ha finalizado tras 10 minutos de
                  duraci??n, o en cualquier otro momento anterior a petici??n de ambos jugadores o
                  parejas.
                </ListItem>
                <ListItem p={2}>
                  Si la pelota est?? en juego al llegarse al tiempo l??mite, el juego ser??
                  interrumpido por el ??rbitro y se reanudar?? con el servicio del jugador que sirvi??
                  en la jugada que fue interrumpida.
                </ListItem>
                <ListItem p={2}>
                  Si la pelota no est?? en juego al llegarse al tiempo l??mite, el juego se reanudar??
                  con el servicio del jugador que rest?? en la jugada inmediatamente anterior.
                </ListItem>
                <ListItem p={2}>
                  A partir de ese momento, cada jugador servir?? un tanto por turno hasta el final
                  del juego, y el jugador o pareja restadora ganar?? un tanto si hace 13 devoluciones
                  correctas.
                </ListItem>
                <ListItem p={2}>
                  Una vez que haya entrado en vigor, la regla de aceleraci??n se mantendr?? hasta el
                  final del partido.
                </ListItem>
              </List>
            </MotionVStack>
          </VStack>
        </Container>
        <Footer />
      </VStack>
    </>
  )
}

export default Reglamento
