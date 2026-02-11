import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'k95iarb2',
    dataset: 'production',
  },

  studioHost: 'backoffice--combo-experience',
  deployment: {
    autoUpdates: true,
    appId: 'y481zszuiyijlb8tfh3flnc7',
  },
})
