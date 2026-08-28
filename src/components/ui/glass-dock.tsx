'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

type DockIcon = React.ComponentType<{ className?: string }>;

export interface DockItem {
    title: string;
    icon: DockIcon;
    onClick?: () => void;
    href?: string;
}

export interface GlassDockProps
    extends React.HTMLAttributes<HTMLDivElement> {
    items: DockItem[];
    dockClassName?: string;
}

/* =========================================================
   GSAP MORPHSVG PLUGIN
========================================================= */

if (typeof window !== 'undefined') {
    import('gsap/MorphSVGPlugin')
        .then((plugin) => {
            if (plugin?.MorphSVGPlugin) {
                gsap.registerPlugin(plugin.MorphSVGPlugin);
            }
        })
        .catch(() => {
            console.warn(
                'GSAP MorphSVGPlugin not found. Morphing disabled.'
            );
        });
}

const getHasMorph = () => {
    return (
        typeof window !== 'undefined' &&
        !!gsap.plugins?.morphSVG
    );
};

/* =========================================================
   MORPHING ICON
========================================================= */

const MorphingIcon = ({
    type,
    isActive,
    onClick,
    onMouseEnter,
}: {
    type: string;
    isActive: boolean;
    onClick: () => void;
    onMouseEnter?: () => void;
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    const getScaleVar = () =>
        `--tab-bar-${type}-scale`;

    const getOpacityVar = () =>
        `--tab-bar-${type}-opacity`;

    const animateIcon = () => {
        if (!buttonRef.current || !pathRef.current) {
            return;
        }

        const button = buttonRef.current;
        const path = pathRef.current;

        gsap.killTweensOf([
            button,
            path,
            path.parentElement,
        ]);

        const scaleVar = getScaleVar();
        const opacityVar = getOpacityVar();

        gsap.to(button, {
            [scaleVar]: 0.25,
            [opacityVar]: 0,
            duration: 0.1,
            onComplete: () => {
                if (!getHasMorph()) {
                    gsap.to(button, {
                        [scaleVar]: 0.7,
                        [opacityVar]: 1,
                        duration: 0.5,
                        ease: 'elastic.out(1, .9)',
                    });

                    return;
                }

                let finalPath = '';

                switch (type) {
                    case 'home':
                        finalPath =
                            'M21 18V10.5339C21 9.57062 20.5374 8.66591 19.7565 8.1019L13.7565 3.76856C12.7079 3.01128 11.2921 3.01128 10.2435 3.76856L4.24353 8.1019C3.46259 8.66591 3 9.57062 3 10.5339V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18Z';
                        break;

                    case 'email':
                        finalPath =
                            'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z';
                        break;

                    case 'linkedin':
                        finalPath =
                            'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';
                        break;

                    case 'github':
                        finalPath =
                            'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
                        break;

                    case 'x':
                        finalPath =
                            'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z';
                        break;

                    case 'blog':
                        finalPath =
                            'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z';
                        break;

                    case 'marker':
                        finalPath =
                            'M12 21C12 21 14.6062 18.8589 16.64 16C17.941 14.1711 19 12.0475 19 10C19 6.134 15.87 3 12 3C8.13 3 5 6.134 5 10C5 12.0475 6.05896 14.1711 7.36 16C9.39381 18.8589 12 21 12 21Z';
                        break;

                    default:
                        finalPath =
                            path.getAttribute('d') || '';
                }

                gsap.to(path, {
                    morphSVG: finalPath,
                    duration: 0.7,
                    ease: 'elastic.out(1, .9)',
                    onStart: () => {
                        gsap.to(button, {
                            [scaleVar]: 0.7,
                            duration: 0.7,
                            ease: 'elastic.out(1, .9)',
                        });

                        gsap.to(button, {
                            [opacityVar]: 1,
                            duration: 0.2,
                        });
                    },
                });
            },
        });
    };

    const handleMouseEnter = () => {
        onMouseEnter?.();
        animateIcon();
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;

        const button = buttonRef.current;

        gsap.killTweensOf([
            button,
            pathRef.current,
            pathRef.current?.parentElement,
        ]);

        gsap.to(button, {
            [getScaleVar()]: 0,
            [getOpacityVar()]: 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const paths: Record<string, string> = {
        home:
            'M3 18V10.5339C3 9.57062 3.46259 8.66591 4.24353 8.1019L10.2435 3.76856C11.2921 3.01128 12.7079 3.01128 13.7565 3.76856L19.7565 8.1019C20.5374 8.66591 21 9.57062 21 10.5339V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18Z',

        email:
            'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',

        linkedin:
            'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',

        github:
            'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',

        x:
            'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',

        blog:
            'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',

        marker:
            'M12 21C12 21 9.39536 18.8605 7.3637 16C6.06474 14.1711 5 12.0475 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 12.0475 17.9353 14.1711 16.6363 16C14.6046 18.8605 12 21 12 21Z',
    };

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                type,
                isActive ? 'active' : '',
                'flex items-center justify-center cursor-pointer'
            )}
            aria-label={type}
        >
            <svg
                viewBox="0 0 24 24"
                className="w-[22px] h-[22px]"
            >
                <path
                    ref={pathRef}
                    d={paths[type] || paths.home}
                    fill="currentColor"
                    stroke="none"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

/* =========================================================
   GLASS DOCK
========================================================= */

export const GlassDock = React.forwardRef<
    HTMLDivElement,
    GlassDockProps
>(
    (
        {
            items,
            className,
            dockClassName,
            ...props
        },
        ref
    ) => {
        const [hoveredIndex, setHoveredIndex] =
            useState<number | null>(null);

        const [direction, setDirection] = useState(0);

        const handleMouseEnter = (index: number) => {
            if (
                hoveredIndex !== null &&
                index !== hoveredIndex
            ) {
                setDirection(
                    index > hoveredIndex ? 1 : -1
                );
            }

            setHoveredIndex(index);
        };

        const getTooltipPosition = (index: number) =>
            index * 56 + 12;

        return (
            <div
                ref={ref}
                className={cn('w-max', className)}
                {...props}
            >
                <div
                    className={cn(
                        'glass-dock relative flex gap-4 items-center px-6 py-4 rounded-2xl',
                        'glass-border bg-white/80 dark:bg-black/80',
                        'backdrop-blur-xl shadow-2xl justify-center',
                        dockClassName
                    )}
                    onMouseLeave={() => {
                        setHoveredIndex(null);
                        setDirection(0);
                    }}
                >
                    {/* TOOLTIP */}

                    <AnimatePresence>
                        {hoveredIndex !== null && (
                            <motion.div
                                layout
                                initial={{
                                    opacity: 0,
                                    scale: 0.92,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: -48,
                                    x: getTooltipPosition(
                                        hoveredIndex
                                    ),
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.92,
                                    y: 12,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 18,
                                }}
                                className="absolute top-0 left-0 pointer-events-none z-50"
                            >
                                <div
                                    className={cn(
                                        'px-5 py-2 rounded-lg',
                                        'bg-black text-white',
                                        'dark:bg-white dark:text-black',
                                        'shadow-md flex items-center justify-center',
                                        'border border-neutral-700 dark:border-neutral-300',
                                        'min-w-[100px]'
                                    )}
                                >
                                    <div className="relative h-4 flex items-center justify-center overflow-hidden w-full">
                                        <AnimatePresence
                                            mode="popLayout"
                                            custom={direction}
                                        >
                                            <motion.span
                                                key={
                                                    items[
                                                        hoveredIndex
                                                    ].title
                                                }
                                                custom={
                                                    direction
                                                }
                                                initial={{
                                                    x:
                                                        direction >
                                                        0
                                                            ? 35
                                                            : -35,
                                                    opacity: 0,
                                                    filter:
                                                        'blur(6px)',
                                                }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                    filter:
                                                        'blur(0px)',
                                                }}
                                                exit={{
                                                    x:
                                                        direction >
                                                        0
                                                            ? -35
                                                            : 35,
                                                    opacity: 0,
                                                    filter:
                                                        'blur(6px)',
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: 'easeOut',
                                                }}
                                                className="text-[13px] font-medium tracking-wide whitespace-nowrap"
                                            >
                                                {
                                                    items[
                                                        hoveredIndex
                                                    ].title
                                                }
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* DOCK ITEMS */}

                    {items.map((item, index) => {
                        const Icon = item.icon;

                        const isHovered =
                            hoveredIndex === index;

                        const type =
                            item.title.toLowerCase();

                        const animatedTypes = [
                            'home',
                            'blog',
                            'marker',
                            'email',
                            'linkedin',
                            'x',
                            'github',
                        ];

                        const isAnimated =
                            animatedTypes.includes(
                                type
                            );

                        /* ============================
                           IMPORTANT CLICK HANDLER
                        ============================ */

                        const handleClick = () => {
                            if (item.onClick) {
                                item.onClick();
                                return;
                            }

                            if (item.href) {
                                window.open(
                                    item.href,
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }
                        };

                        return (
                            <div
                                key={`${item.title}-${index}`}
                                onMouseEnter={() =>
                                    handleMouseEnter(
                                        index
                                    )
                                }
                                className="relative w-10 h-10 flex items-center justify-center"
                            >
                                <motion.div
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    animate={{
                                        scale: isHovered
                                            ? 1.1
                                            : 1,
                                        y: isHovered
                                            ? -3
                                            : 0,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 24,
                                    }}
                                >
                                    {isAnimated ? (
                                        <MorphingIcon
                                            type={type}
                                            isActive={
                                                isHovered
                                            }
                                            onClick={
                                                handleClick
                                            }
                                            onMouseEnter={() => {}}
                                        />
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={
                                                handleClick
                                            }
                                            className="flex items-center justify-center cursor-pointer"
                                            aria-label={
                                                item.title
                                            }
                                        >
                                            <Icon
                                                className={cn(
                                                    'h-[22px] w-[22px] transition-colors duration-200',
                                                    isHovered
                                                        ? 'text-neutral-900 dark:text-white'
                                                        : 'text-neutral-500 dark:text-neutral-400'
                                                )}
                                            />
                                        </button>
                                    )}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
);

GlassDock.displayName = 'GlassDock';

export default GlassDock;
