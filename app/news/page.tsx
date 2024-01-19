import WidgetTitle from '@/components/widgets/widgetTitle'
import WidgetService from "@/components/widgets/widgetService"
import WidgetPartner from "@/components/widgets/widgetPartners"
import WidgetBlog from "@/components/widgets/widgetBlog"
import WidgetGetInTouch from "@/components/widgets/widgetGetInTouch"

export default function News() {
  return (
    <div>
      <WidgetTitle title='News' />
      <WidgetService />
    </div>
  )
}
