import { ComponentProps, forwardRef } from 'react'
import {
  Button as NativeButton,
  Text as NativeText,
  Platform,
  Linking,
  TextStyle,
  TextInput as NativeInput,
  Image as NativeImage,
} from 'react-native'
import { styled, StyledProps } from 'nativewind'
import { TextLink as SolitoTextLink } from 'solito/link'

// looks like Button doesn't support styling
export const Button = styled(NativeButton, '')

export const Image = styled(NativeImage, '')

export const TextInput = styled(
  NativeInput,
  'w-full max-w-sm rounded-md p-1.5 text-gray-900 bg-gray-300 ring-1'
)

export const Text = styled(NativeText)

/**
 * You can use this pattern to create components with default styles
 */
export const P = styled(NativeText, 'text-base text-black my-4')

/**
 * Components can have defaultProps and styles
 */
export const H1 = styled(NativeText, 'text-3xl font-extrabold my-4')
H1.defaultProps = {
  accessibilityLevel: 1,
  accessibilityRole: 'header',
}

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
  href?: string
  target?: '_blank'
}

export const A = forwardRef<NativeText, StyledProps<AProps>>(function A(
  { className = '', href, target, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
      hrefAttrs: {
        rel: 'noreferrer',
        target,
      },
    },
    default: {
      onPress: (event) => {
        props.onPress && props.onPress(event)
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href)
        }
      },
    },
  })

  return (
    <Text
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  )
})

/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled<
  ComponentProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  )
}, 'text-base font-bold hover:underline text-blue-500')
