import { DashboardShell } from "@/components/layout/DashboardShell"

export default function DashboardPage() {
    return (
        <DashboardShell>
            <div className="space-y-6">
                <div>
                    <h1 className="text-4xl font-display font-bold gradient-text">Dashboard</h1>
                    <p className="text-muted-foreground mt-2">Welcome to your premium agency dashboard.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass p-6 rounded-xl space-y-4">
                        <h3 className="font-bold text-xl">Quick Start</h3>
                        <p className="text-sm text-balance">Get started by uploading your first fashion resource or browsing the library.</p>
                    </div>
                    <div className="glass p-6 rounded-xl space-y-4">
                        <h3 className="font-bold text-xl">AI Studio</h3>
                        <p className="text-sm text-balance">Generate high-end fashion imagery using our integrated Gemini and Replicate models.</p>
                    </div>
                    <div className="glass p-6 rounded-xl space-y-4">
                        <h3 className="font-bold text-xl">Analytics</h3>
                        <p className="text-sm text-balance">Track your creative performance and storage usage in real-time.</p>
                    </div>
                </div>
            </div>
        </DashboardShell>
    )
}
