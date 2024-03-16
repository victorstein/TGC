import { useWindowDimensions } from 'react-native'
import RenderHtml, { type RenderHTMLProps } from 'react-native-render-html'
import { PRenderer } from './custom-renderers/p-custom-renderer'
import { H3Renderer } from './custom-renderers/h3-custom-renderer'
import { LiRenderer } from './custom-renderers/li-custom-renderer'
import { ImgRenderer } from './custom-renderers/img-custom-renderer'

export interface IHtmlRendererProps extends Omit<RenderHTMLProps, 'source'> {
  htmlString: string
}

export const HtmlRenderer = (props: IHtmlRendererProps): JSX.Element => {
  const { width } = useWindowDimensions()
  return (
    <RenderHtml
      contentWidth={width}
      systemFonts={['lato-regular']}
      renderers={{
        p: PRenderer,
        h3: H3Renderer,
        li: LiRenderer,
        img: ImgRenderer
      }}
      {...props}
      source={{ html: props.htmlString }}
    />
  )
}
