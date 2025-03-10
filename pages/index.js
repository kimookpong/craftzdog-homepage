import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoFacebook, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based on Nakorn Sri Thammarat, Thailand!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hakim Mudor
          </Heading>
          <p>Freelance Dev.</p>
          <p>I got married and have a lovely one child.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Meet Hakim Mudor, a skilled developer with a passion for creating
          dynamic and user-friendly websites and applications. With expertise in
          React and PHP, I brings a wealth of technical knowledge and creativity
          to every project. I&apos;m dedicated to delivering top-quality
          results, and his attention to detail is second to none. If you&apos;re
          looking for a talented and reliable developer, look no further than
          Hakim Mudor.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1989</BioYear>
          Born in{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Narathiwat_province"
            target="_blank"
          >
            Narathiwat
          </Link>{' '}
          (นราธิวาส), Southern of Thailand.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Graduated with a Bachelor&apos;s degree in Computer Engineering from
          the Faculty of Engineering, Prince of Songkhla University.
          (จบการศึกษาปริญญาตรี คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์,
          มหาวิทยาลัยสงขลานครินทร์)
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Start working as a developer at a company in Hatyai, Songkhla.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          System Analyst at{' '}
          <Link href="https://www.wu.ac.th/" target="_blank">
            Walailak University
          </Link>{' '}
          and open to freelance work from external organizations.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://www.nextflix.com/" target="_blank">
            Netflix
          </Link>
          , Garden, Photography
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/kimookpong" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @kimookpong
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.facebook.com/hakim.mudor89/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @Hakim Mudor
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="kimookpong" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @kimookpong
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
