import React from 'react'
import {Mobile, Desktop} from '../ScreenView'
import { TEAM_MEMBERS_DETAILS } from '../../../utils/constants'
import TeamMember from './TeamMember'

const Team = () => {
  return (
    <>
        <Mobile>
            <div className="team-section-container-mobile">
                <h2>Team</h2>
                <p className="team-section-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. 
                    Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui.
                    Integer id luctus est. Praesent dapibus tellus at sagittis fermentum.
                </p>
                {
                    TEAM_MEMBERS_DETAILS.map(
                        teamMemberDetails => 
                        <TeamMember
                            key={teamMemberDetails?.id}   
                            teamMemberDetails={teamMemberDetails}
                        />
                    )
                }
            </div>
        </Mobile>
        <Desktop>
            <div className="team-section-container-desktop">
                <h2>Team</h2>
                <p className="team-section-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet fringilla dolor. 
                    Nullam libero purus, sagittis eget luctus vitae, porttitor ac dui.
                    Integer id luctus est. Praesent dapibus tellus at sagittis fermentum.
                </p>
                {
                    TEAM_MEMBERS_DETAILS.map(
                        teamMemberDetails => 
                        <TeamMember
                            key={teamMemberDetails?.id}   
                            teamMemberDetails={teamMemberDetails}
                        />
                    )
                }
            </div>
        </Desktop>
    </>
  )
}

export default Team