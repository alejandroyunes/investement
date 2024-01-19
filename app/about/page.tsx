import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetTitle from '@/components/widgets/widgetTitle'
import WidgetAbout from '@/components/widgets/widgetAbout'

export default function Home() {
  return (
    <div >
      <WidgetTitle title='About Us' />
      <WidgetAbout inversedImage />
      <WidgetCeo />
    </div>
  )
}
