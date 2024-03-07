import React from 'react'
import { Mobile, Desktop } from '../ScreenView'
import TeamMemberProfileDetails from './TeamMemberProfileDetails';

const TeamMember = ({teamMemberDetails}) => {

    const {name, designation, description} = teamMemberDetails;

  return (
    <>
        <Mobile>
            <div className="team-member-container-mobile">
                <TeamMemberProfileDetails name={name} designation={designation} />
                <div className="team-member-profile-description-container-mobile">
                    {description}
                </div>
            </div>
        </Mobile>
        <Desktop>
            <div className="team-member-container-desktop">
                <TeamMemberProfileDetails name={name} designation={designation} />
                <div className="team-member-profile-description-container-desktop">
                    {description}
                </div>
            </div>
        </Desktop>
    </>
  )
}

export default TeamMember;