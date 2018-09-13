import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'top-ten-crimes',
  shadow: true
})
export class TopTenCrimes {
  @Intent('topTenCrimes') fetcher: BearerFetch
  render() {
    return <bearer-scrollable 
		fetcher={this.fetcher} 
		perPage={10}
		renderCollection={collection => (
			<bearer-navigator-collection
			data={collection}
			renderFunc={category => category.Category}
			/> 
		})
  }
}
