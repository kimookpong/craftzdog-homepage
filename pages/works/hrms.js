import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HRMS">
    <Container>
      <Title>
        HRMS-WU <Badge>2021-</Badge>
      </Title>
      <P>Human Resource Managenent System : Walailak University</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hrms.wu.ac.th/">
            https://hrms.wu.ac.th/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, Oracle</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/hrms_01.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
