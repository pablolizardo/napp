import { Avatar, AvatarFallback, AvatarImage } from "@/xt/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/xt/components/ui/card";
import { TypographyH2, TypographyLarge } from "@/xt/components/ui/typography";
import { xtGap, xtSectionGap } from "@/xt/lib/styling";

/* eslint-disable @next/next/no-img-element */
const Testimonials = () => {

    return (
        <section className="w-full max-w-6xl mx-auto" style={xtSectionGap}>
            <div>
                <TypographyH2 > What people are saying. </TypographyH2>
                <TypographyLarge className="mx-auto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </TypographyLarge>
                <div className="text-center my-10 flex  justify-center" style={xtGap}>
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                </div>
            </div>
            <div className="grid md:grid-cols-3 " style={xtGap}>
                <div className="grid " style={xtGap}>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=1" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Kenzie Edgar. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti. </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=2" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Stevie Tifft. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel. </CardContent>
                    </Card>
                </div>
                <div className="grid gap-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=3" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Tommie Ewart. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi. </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=4" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Charlie Howse. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto. </CardContent>
                    </Card>
                </div>
                <div className="grid gap-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=5" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Nevada Herbertson. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem! </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>

                                <Avatar >
                                    <AvatarFallback>XT</AvatarFallback>
                                    <AvatarImage src="https://i.pravatar.cc/100?img=6" alt='xt' />
                                </Avatar>
                            </CardTitle>
                            <CardDescription> Kris Stanton. </CardDescription>
                        </CardHeader>
                        <CardContent> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam! </CardContent>
                    </Card>
                </div >
            </div >
        </section >
    );
};

export default Testimonials