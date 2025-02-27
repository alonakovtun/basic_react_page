import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Section/Section.jsx';

import { CORE_CONCEPTS } from '../../data.js';


function CoreConcepts() {
    return (
       <Section id="core-concepts" title="Core Concept">
          <ul>
            {CORE_CONCEPTS.map((conceprItem) => (
              <CoreConcept key={conceprItem.title} {...conceprItem} />
            ))}
          </ul>
        </Section>
    )
}

export default CoreConcepts;