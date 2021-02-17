import React from 'react';
import { Milestone } from '../common/liststypes';

export interface MilestoneSectionProps {
    milestones: Milestone[]
}

function MilestoneSection({
    milestones
}: MilestoneSectionProps) {
    const milestoneCards = milestones.map((m: Milestone, i: number) => {
            return (
                <div key={i}>
                    {m.description}
                </div>
            );
        });
    return (
        <section>
            {milestoneCards}
        </section>
    );
}

export default MilestoneSection;

