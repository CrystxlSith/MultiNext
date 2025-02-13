import { useState } from "react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { CardContent } from "@/app/components/ui/card";

export function Modifiers() {
    const [modifiers, setModifiers] = useState({
        title: '',
        description: '',
        category: ''
    });

    return (
        <div className="flex flex-col gap-2 p-1">
            <CardContent className="space-y-6">
                <div className="flex flex-col gap-2">
                    <Input 
                        type="text" 
                        value={modifiers.title}
                        onChange={(e) => setModifiers(prev => ({...prev, title: e.target.value}))}
                        placeholder="Title" 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Input 
                        type="text" 
                        value={modifiers.description}
                        onChange={(e) => setModifiers(prev => ({...prev, description: e.target.value}))}
                        placeholder="Description" 
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Input 
                        type="text" 
                        value={modifiers.category}
                        onChange={(e) => setModifiers(prev => ({...prev, category: e.target.value}))}
                        placeholder="Category" 
                    />
                </div>
                <Button 
                    onClick={() => {
                        console.log(modifiers);
                    }}
                    className="w-full"
                >
                    Submit
                </Button>
            </CardContent>
        </div>
    );
}