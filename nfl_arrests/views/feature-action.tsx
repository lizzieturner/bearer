/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
      <div>
      <bearer-navigator btnProps={ { content:"nfl_arrests", kind:"primary" } } direction="right">
        <bearer-navigator-screen navigationTitle="NFL Crime Categories">
		<top-ten-crimes />
        </bearer-navigator-screen>
	<bearer-navigator-screen
		renderFunc={({ data }) => <crime-occurrences {...data} />}
		name="crimeOccurences"
		navigationTitle={data => data.category.Category}
	/>
      </bearer-navigator>
      </div>
    )
  }
}
