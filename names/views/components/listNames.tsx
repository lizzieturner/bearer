import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'list-names',
  shadow: true
})
export class ListNames {
  @Intent('listNames') fetcher: BearerFetch
  render() {
    return <bearer-scrollable fetcher={this.fetcher} />
  }
}
