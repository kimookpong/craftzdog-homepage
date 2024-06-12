import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHrms from '../public/images/works/hrms_01.png'
import thumbTcnap from '../public/images/works/tcnap_01.png'
import thumbWdw from '../public/images/works/wdw_pos.png'
import thumbStock from '../public/images/works/stock.png'
import thumbFarmd from '../public/images/works/farmd_01.png'
import thumbAbgame from '../public/images/works/abgame.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Our Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tcnap" title="Tcnap" thumbnail={thumbTcnap}>
            Thailand Community Network Assessment Project
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="farmd" title="Farm-D Projet" thumbnail={thumbFarmd}>
            Project for developing systems for agricultural personnel
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="wdw" title="Wanderwoods POS" thumbnail={thumbWdw}>
            Point of Sale (POS) for big restaurant
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="stock"
            title="Stock Management"
            thumbnail={thumbStock}
          >
            A stock management system utilizing QR code scanning for real-time
            verification and monitoring
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="hrms" title="HRMS-WU" thumbnail={thumbHrms}>
            Human Resource Managenent System : Walailak University
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Games
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ab-game" title="AB-Game" thumbnail={thumbAbgame}>
            The AB Game is a guessing game where players try to guess a 4-digit
            number, with each digit being unique.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
