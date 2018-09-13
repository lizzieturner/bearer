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
        <bearer-navigator btnProps={ {content:"names", kind:"primary"} } direction="right">
          <bearer-navigator-auth-screen />
          <bearer-navigator-screen navigationTitle="Names">
            <list-names />
          </bearer-navigator-screen>
        </bearer-navigator>
      </div>
    )
  }
}
