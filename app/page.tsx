import Billboard from "@/components/billboard"
import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetAbout from '@/components/widgets/widgetAbout'
import WidgetPartner from '@/components/widgets/widgetPartners'
import WidgetGetInTouch from '@/components/widgets/widgetGetInTouch'
import WidgetServices from "@/components/widgets/widgetServices"

export default function Home() {

  return (
    <>
      <Billboard />
      <WidgetAbout />
      <WidgetCeo />
      <WidgetServices />
      <WidgetPartner />
      <WidgetGetInTouch />
    </>
  )
}
