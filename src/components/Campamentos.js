import React from 'react';
import { Box, Flex, Text, Button, VStack, Center, Image, Stack, Heading } from '@chakra-ui/react';
import paisaje from './imagenes/paisaje.jpg';

function CardComponent({ title, description, buttons, alignment, ...props }) {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      ml={alignment === 'left' ? { sm: '0', md: '0' } : 0}
      mr={alignment === 'right' ? { sm: '0', md: '0' } : 0}
      {...props}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '250px' }} 
        src={paisaje}
        alt={title}
      />
      <Stack spacing={4}>
        <Box p={4}>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
        </Box>
        <Box p={4}>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
          {buttons.map((btn, index) => (
    <Button 
        key={index} 
        variant={btn.variant} 
        backgroundColor={btn.backgroundColor} 
        color={btn.color}
        onClick={() => window.open(btn.link, "_self")}
    >
        {btn.label}
    </Button>
))}

          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

function Campamentos() {
  return (
    <Box>
      {/* Sección superior con imagen de fondo */}
      <Box
        bgImage={paisaje}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["300px", "450px"]} 
        color="white"
        py={4} 
      >
        <Center height="100%">
          <VStack spacing={2}>
            <Text fontSize={["2xl", "5xl"]} fontWeight="bold">
              PROGRAMAS
            </Text>
          </VStack>
        </Center>
      </Box>

      {/* Texto llamativo */}
      <Center mt={4} mb={8}>
        <Text fontSize={["xl", "2xl"]} fontWeight="semibold" textAlign="center">
          Conocé más sobre nuestros campamentos y experiencias únicas.
        </Text>
      </Center>

      {/* Sección amarilla */}
      <Box backgroundColor="#FFDE59" py={4}>
        <CardComponent 
          title="Lemniscato"
          description="Es un campamento virtual dirigido a jóvenes de entre 18 a 25 años interesados por las STEM, jóvenes que busquen sumergirse en una experiencia única de 3 a 5 días, que deseen generar vínculos y contactos con personas de diferentes áreas del conocimiento que puedan ser de utilidad en el futuro y que se diviertan adquiriendo conocimientos y herramientas útiles en el proceso. Utilizaremos distintas herramientas digitales para emular que estamos todos juntos en un hotel, además de que nos conectamos mañana, tarde y noche para fortalecer esta sensación de cercanía."
          buttons={[
            { 
                label: "Saber más", 
                variant: "solid", 
                backgroundColor: "white", 
                color: "black",
                link: "/Lemniscato"
            },
            { 
                label: "Postular", 
                variant: "solid", 
                backgroundColor: "white", 
                color: "black",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSfb1Qngd_Sg3NzfUGhnWGF9gLJTmz_3_1tglAdjEZG_si4tRQ/viewform"
            }
        ]}
          alignment="left"
        />
      </Box>

      {/* Sección blanca inferior */}
      <Box backgroundColor="#white" py={4}>
        <CardComponent 
          title="Nexcognita"
          description="No se la info"
          buttons={[
            { 
                label: "Saber más", 
                variant: "solid", 
                backgroundColor: "#FFDE59", 
                color: "black",
                link: "/Nexcognita"
            },
            { 
                label: "Postular", 
                variant: "solid", 
                backgroundColor: "#FFDE59", 
                color: "black",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSfb1Qngd_Sg3NzfUGhnWGF9gLJTmz_3_1tglAdjEZG_si4tRQ/viewform"
            }
        ]}
          alignment="left"
        />
      </Box>
    </Box>
  );
}

export default Campamentos;
