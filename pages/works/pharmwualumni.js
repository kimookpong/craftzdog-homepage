import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pharmacy WU Alumni">
    <Container>
      <Title>
        Pharmacy WU Alumni <Badge>2025 - current</Badge>
      </Title>
      <P>
        A platform for managing pharmacy alumni relations at Walailak University
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.pharmwualumni.com/" isExternal>
            https://www.pharmwualumni.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, PostgreSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/pharmwualumni.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
