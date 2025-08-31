import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cyber': ['JetBrains Mono', 'Courier New', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					green: 'hsl(var(--cyber-green))',
					blue: 'hsl(var(--cyber-blue))',
					orange: 'hsl(var(--warning-orange))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'cyber-pulse': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 20px hsl(var(--cyber-green) / 0.3)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 40px hsl(var(--cyber-green) / 0.6)'
					}
				},
				'scan-line': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--cyber-green))' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'glow-shift': {
					'0%, 100%': { filter: 'hue-rotate(0deg)' },
					'50%': { filter: 'hue-rotate(60deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cyber-pulse': 'cyber-pulse 2s infinite',
				'scan-line': 'scan-line 3s linear infinite',
				'typing': 'typing 3s steps(30) 1s forwards',
				'blink': 'blink 1s infinite',
				'matrix-fall': 'matrix-fall 4s linear infinite',
				'glow-shift': 'glow-shift 3s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-cyber': 'var(--gradient-cyber)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-dark': 'var(--gradient-dark)'
			},
			boxShadow: {
				'glow-green': 'var(--glow-green)',
				'glow-blue': 'var(--glow-blue)',
				'glow-intense': 'var(--glow-intense)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
