import { useState } from "react";
import { CardContent } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

export function StreamKeys() {
    const [streamKeys, setStreamKeys] = useState({
        twitch: '',
        youtube: '',
        kick: '',
        tiktok: ''
    });

    return (
        <div className="flex flex-col gap-2 p-1">
                <CardContent className="space-y-6">
                    <div className="flex flex-col gap-2">
                        {/* <Label className="text-lg font-medium">Twitch Key</Label> */}
                        <Input 
                            type="password" 
                            value={streamKeys.twitch}
                            onChange={(e) => setStreamKeys(prev => ({...prev, twitch: e.target.value}))}
                            placeholder="Twitch" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* <Label className="text-lg font-medium">Youtube Key</Label> */}
                        <Input 
                            type="password" 
                            value={streamKeys.youtube}
                            onChange={(e) => setStreamKeys(prev => ({...prev, youtube: e.target.value}))}
                            placeholder="Youtube" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* <Label className="text-lg font-medium">Kick Key</Label> */}
                        <Input 
                            type="password" 
                            value={streamKeys.kick}
                            onChange={(e) => setStreamKeys(prev => ({...prev, kick: e.target.value}))}
                            placeholder="Kick" 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        {/* <Label className="text-lg font-medium">TikTok Key</Label> */}
                        <Input 
                            type="password" 
                            value={streamKeys.tiktok}
                            onChange={(e) => setStreamKeys(prev => ({...prev, tiktok: e.target.value}))}
                            placeholder="TikTok" 
                        />
                    </div>
                    <Button 
                      onClick={() => {
                        console.log(streamKeys);
                      }}
                    className="w-full"
                    >
                        Save
                    </Button>
                </CardContent>
        </div>
    )
}