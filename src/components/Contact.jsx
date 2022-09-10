import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
function Contact() {
  return (
    <Stack border="2px solid salmon" h="90vh">
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} p={[2, 4, 10, 10]}>
        <Box bg="tomato" height="80vh"></Box>
        <Box bg="tomato" height="80vh">
          
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

export default Contact;
