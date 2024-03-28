import { Badge } from "@/xt/components/ui/badge";
import { Card, CardContent } from "@/xt/components/ui/card";
import { TypographyLarge, TypographyP } from "@/xt/components/ui/typography";
import { xtGap } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const BlogPosts = () => {
  return (
    <div className="grid grid-cols-3 " style={xtGap}>
      <Card>
        <img className="lg:h-48 md:h-36 w-full object-cover object-center bg-foreground/5" src="#" alt="blog" />
        <CardContent className="pt-6 gap-4 flex flex-col items-center">
          <Badge>CATEGORY</Badge>
          <TypographyLarge >The Catalyzer</TypographyLarge>
          <TypographyP>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</TypographyP>
          <div className="flex items-center flex-wrap w-full">
            <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <img className="lg:h-48 md:h-36 w-full object-cover object-center bg-foreground/5" src="#" alt="blog" />
        <CardContent className="pt-6 gap-4 flex flex-col items-center">                    <Badge>CATEGORY</Badge>
          <TypographyLarge >The 400 Blows</TypographyLarge>
          <TypographyP>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</TypographyP>
          <div className="flex items-center flex-wrap">
            <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </CardContent>            </Card>
      <Card>
        <img className="lg:h-48 md:h-36 w-full object-cover object-center bg-foreground/5" src="#" alt="blog" />
        <CardContent className="pt-6 gap-4 flex flex-col items-center">                    <Badge>CATEGORY</Badge>
          <TypographyLarge >Shooting Stars</TypographyLarge>
          <TypographyP>Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</TypographyP>
          <div className="flex items-center flex-wrap w-full">
            <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </CardContent>            </Card>
    </div>
  );
}

export default BlogPosts;