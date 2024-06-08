import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import * as PhosphorIcons from "phosphor-react-native";
import Svg, { Path } from "react-native-svg";

const IconSets = {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  PhosphorIcons,
  Custom: "None",
};

export type IconSetsKeys = keyof typeof IconSets;

type ExpoVectorIcons =
  | keyof typeof Ionicons.glyphMap
  | keyof typeof FontAwesome.glyphMap
  | keyof typeof MaterialIcons.glyphMap
  | keyof typeof MaterialCommunityIcons.glyphMap
  | keyof typeof Feather.glyphMap;

type PhosphorIconsKeys = keyof typeof PhosphorIcons;

type SvgIconElement = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type CustomIcons =
  | "classified"
  | "custom-biometric"
  | "club"
  | "service-providers"
  | "social-actions";

export type IconType =
  | ExpoVectorIcons
  | CustomIcons
  | SvgIconElement
  | PhosphorIconsKeys;

interface IconProps {
  type?: IconSetsKeys;
  name: IconType;
  size?: number;
  color?: string;
  customSvg?: string;
}

export function Icon({
  type = "PhosphorIcons",
  name,
  size = 24,
  color = "black",
  customSvg,
}: IconProps) {
  if (type === "Custom") {
    // const CustomIcons = {
    //   "custom-biometric": <Biometric width={size} height={size} fill={color} />,
    // };

    // return CustomIcons[name as keyof typeof CustomIcons] || null;
    return {} as any;
  }

  if (type === "PhosphorIcons") {
    const IconComponent = PhosphorIcons[name as PhosphorIconsKeys];
    if (typeof IconComponent === "function") {
      return <IconComponent size={size} color={color} />;
    }
  }

  if (customSvg) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d={customSvg} fill={color} />
      </Svg>
    );
  }

  if (type && IconSets[type]) {
    const IconComponent = IconSets[type][name as any];
    if (IconComponent) {
      return <IconComponent size={size} color={color} />;
    }
  }

  return null;
}
