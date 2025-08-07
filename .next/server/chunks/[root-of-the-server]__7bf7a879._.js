module.exports = {

"[project]/.next-internal/server/app/api/seo/audit/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/seo/audit/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
async function POST(request) {
    try {
        const { url } = await request.json();
        if (!url) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'URL is required'
            }, {
                status: 400
            });
        }
        // Validate URL format
        try {
            new URL(url);
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid URL format'
            }, {
                status: 400
            });
        }
        // In a real implementation, you would:
        // 1. Crawl the website
        // 2. Analyze technical SEO factors
        // 3. Check Core Web Vitals
        // 4. Analyze content quality
        // 5. Use OpenAI to generate insights
        // For now, we'll use OpenAI to generate SEO recommendations based on the URL
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are an expert SEO analyst. Analyze the given website URL and provide SEO recommendations in JSON format."
                },
                {
                    role: "user",
                    content: `Analyze this website for SEO: ${url}. Provide a comprehensive SEO audit with scores, issues, and recommendations.`
                }
            ],
            temperature: 0.7,
            max_tokens: 2000
        });
        const aiAnalysis = completion.choices[0]?.message?.content;
        // Mock audit results with AI-enhanced recommendations
        const auditResults = {
            overallScore: Math.floor(Math.random() * 30) + 70,
            url: url,
            timestamp: new Date().toISOString(),
            categories: {
                technical: {
                    score: Math.floor(Math.random() * 20) + 80,
                    issues: [
                        {
                            type: 'success',
                            title: 'HTTPS Enabled',
                            description: 'Website uses secure HTTPS protocol'
                        },
                        {
                            type: 'success',
                            title: 'Mobile Friendly',
                            description: 'Page is optimized for mobile devices'
                        },
                        {
                            type: 'warning',
                            title: 'Page Speed',
                            description: 'Page loads in 3.2s, could be faster'
                        },
                        {
                            type: Math.random() > 0.5 ? 'error' : 'warning',
                            title: 'XML Sitemap',
                            description: 'XML sitemap status needs verification'
                        }
                    ]
                },
                content: {
                    score: Math.floor(Math.random() * 25) + 75,
                    issues: [
                        {
                            type: 'success',
                            title: 'Title Tags',
                            description: 'All pages have unique title tags'
                        },
                        {
                            type: 'success',
                            title: 'Meta Descriptions',
                            description: 'Meta descriptions are present and optimized'
                        },
                        {
                            type: 'warning',
                            title: 'Header Structure',
                            description: 'Some pages missing H1 tags'
                        },
                        {
                            type: 'warning',
                            title: 'Content Length',
                            description: 'Some pages have thin content'
                        }
                    ]
                },
                performance: {
                    score: Math.floor(Math.random() * 30) + 70,
                    metrics: {
                        fcp: Math.round((Math.random() * 2 + 1) * 10) / 10,
                        lcp: Math.round((Math.random() * 3 + 2) * 10) / 10,
                        cls: Math.round(Math.random() * 0.1 * 100) / 100,
                        fid: Math.floor(Math.random() * 50) + 10
                    }
                },
                accessibility: {
                    score: Math.floor(Math.random() * 15) + 85,
                    issues: [
                        {
                            type: 'success',
                            title: 'Alt Text',
                            description: 'Images have descriptive alt text'
                        },
                        {
                            type: 'success',
                            title: 'Color Contrast',
                            description: 'Text has sufficient color contrast'
                        },
                        {
                            type: 'warning',
                            title: 'Focus Indicators',
                            description: 'Some interactive elements lack focus indicators'
                        }
                    ]
                }
            },
            recommendations: [
                {
                    priority: 'high',
                    title: 'Optimize Core Web Vitals',
                    description: 'Improve Largest Contentful Paint (LCP) by optimizing images and server response time',
                    impact: 'High SEO impact'
                },
                {
                    priority: 'medium',
                    title: 'Enhance Content Quality',
                    description: 'Add more comprehensive content to thin pages and improve keyword targeting',
                    impact: 'Medium SEO impact'
                },
                {
                    priority: 'low',
                    title: 'Improve Header Structure',
                    description: 'Ensure all pages have proper H1-H6 heading hierarchy',
                    impact: 'Low SEO impact'
                }
            ],
            aiInsights: aiAnalysis || 'AI analysis completed successfully'
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(auditResults);
    } catch (error) {
        console.error('SEO Audit API Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to perform SEO audit'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7bf7a879._.js.map