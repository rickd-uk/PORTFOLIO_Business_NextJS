/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import SectionHeader from 'components/section-header'
import TeamCard from 'components/team-card'

import members from '../data/members'

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan='our team'
          title='The most qualified and talented individuals'
        />
        <Grid sx={styles.grid}>
          {members.map((member) => (
            <TeamCard
              key={member.id}
              src={member.imgSrc}
              altText={member.altText}
              title={member.title}
              designation={member.designation}
              social={member.socialProfile}></TeamCard>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
}
