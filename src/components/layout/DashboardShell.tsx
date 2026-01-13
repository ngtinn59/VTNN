"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Image as ImageIcon,
    Camera,
    Settings,
    LogOut
} from "lucide-react"

interface DashboardShellProps {
    children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
    const [isCollapsed, setIsCollapsed] = useState(false)

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
        { icon: ImageIcon, label: "Library", href: "/dashboard/library" },
        { icon: Camera, label: "Fashion Studio", href: "/dashboard/studio" },
        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    ]

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside
                className={cn(
                    "relative flex flex-col border-r bg-card transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-16" : "w-64"
                )}
            >
                <div className="flex h-16 items-center px-4 border-b">
                    {!isCollapsed && <span className="font-display font-bold text-xl gradient-text">KYE AGENCY</span>}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-card shadow-md"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                    </Button>
                </div>

                <nav className="flex-1 space-y-1 p-2 mt-4">
                    {menuItems.map((item) => (
                        <Button
                            key={item.label}
                            variant="ghost"
                            className={cn(
                                "w-full justify-start gap-3 px-3",
                                isCollapsed && "justify-center px-0"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {!isCollapsed && <span>{item.label}</span>}
                        </Button>
                    ))}
                </nav>

                <div className="p-2 border-t">
                    <Button
                        variant="ghost"
                        className={cn(
                            "w-full justify-start gap-3 px-3 text-destructive",
                            isCollapsed && "justify-center px-0"
                        )}
                    >
                        <LogOut className="h-5 w-5" />
                        {!isCollapsed && <span>Logout</span>}
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto p-8 animate-reveal">
                    {children}
                </div>
            </main>
        </div>
    )
}
