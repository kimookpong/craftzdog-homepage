import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Farm-D Project">
    <Container>
      <Title>
        Farm-D Project <Badge>2023 - current</Badge>
      </Title>
      <P>Project for developing systems for agricultural personnel</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://farmd.vercel.app/" isExternal>
            https://farmd.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, MongoDB, LineOA</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/farmd_01.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
