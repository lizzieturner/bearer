import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'crime-occurrences',
  shadow: true
})
export class CrimeOccurrences {
  @Intent('crimeOccurrences') fetcher: BearerFetch
  render() {
    return <bearer-scrollable 
		fetcher={this.fetcher}
		perPage={10}
		renderCollection={collection => (
			<bearer-navigator-collection
			data={collection}
			renderFunc={category => category.arrest_count}
		    />
	)}
  }
}
