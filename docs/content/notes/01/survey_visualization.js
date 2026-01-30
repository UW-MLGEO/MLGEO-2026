const colors = ['#e66101', '#fdb863', '#f7f7f7', '#b2abd2', '#5e3c99'];
const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

const marginRem = {top: 0, right: 0, bottom: 0, left: 0};
const baseInnerWidth = 50; // rem
const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);

d3.json('survey_data.json').then(data => {
    function render(data) {
        const containerWidth = document.getElementById('visualization').clientWidth || 900;
        const leftMargin = 0;
        const margin = {
            top: marginRem.top * remToPx,
            right: marginRem.right * remToPx,
            bottom: marginRem.bottom * remToPx,
            left: marginRem.left * remToPx
        };
        d3.select('#visualization').selectAll('*').remove();

        // Legend at the very top
        const legendContainer = d3.select('#visualization')
            .append('div')
            .style('display', 'flex')
            .style('flex-wrap', 'nowrap')
            .style('justify-content', 'center')
            .style('gap', '1.5rem')
            .style('max-width', '100%');

        labels.forEach((label, i) => {
            const legendItem = legendContainer
                .append('div')
                .style('display', 'flex')
                .style('align-items', 'center')
                .style('gap', '0.5rem');

            legendItem.append('div')
                .style('width', '1rem')
                .style('height', '1rem')
                .style('background-color', colors[i])
                .style('border', '1px solid currentColor')
                .style('flex-shrink', '0');

            legendItem.append('span')
                .attr('class', 'legend')
                .style('color', 'currentColor')
                .style('white-space', 'nowrap')
                .text(label);
        });

        data.forEach((group, groupIdx) => {
            const barHeightRem = 2;
            const textPaddingTopRem = 0.5;
            const textPaddingBottomRem = 0.5;
            const barPaddingTopRem = 0.5;
            const barPaddingBottomRem = 0.5;
            
            const totalSvgWidth = containerWidth;
            const innerWidth = totalSvgWidth;
            
            // First pass: create text divs and measure their actual heights
            const tempContainer = d3.select('body').append('div')
                .style('position', 'absolute')
                .style('visibility', 'hidden')
                .style('width', innerWidth + 'px');
            
            const questionData = group.questions.map(q => {
                const div = tempContainer.append('div')
                    .style('font-family', 'IBM Plex Serif, serif')
                    .style('word-wrap', 'break-word')
                    .style('overflow-wrap', 'break-word')
                    .style('padding-top', textPaddingTopRem + 'rem')
                    .style('padding-bottom', textPaddingBottomRem + 'rem')
                    .style('box-sizing', 'border-box')
                    .text(q.question);
                
                // Force a reflow to ensure accurate height measurement
                div.node().offsetHeight;
                const textDivHeight = div.node().getBoundingClientRect().height;
                const rowHeight = textDivHeight + (barPaddingTopRem * remToPx) + (barHeightRem * remToPx) + (barPaddingBottomRem * remToPx);
                
                return { question: q, textDivHeight, rowHeight };
            });
            
            tempContainer.remove();
            
            const chartHeight = questionData.reduce((sum, qd) => sum + qd.rowHeight, 0);

            const chartContainer = d3.select('#visualization')
                .append('div')
                .attr('class', 'chart-container');

            // Add h3 title (left-aligned)
            chartContainer.append('h3')
                .style('font-style', 'italic')
                .text(group.group + ':');

            const svg = chartContainer
                .append('svg')
                .attr('width', '100%')
                .attr('height', chartHeight + margin.top + margin.bottom)
                .attr('viewBox', `0 0 ${totalSvgWidth} ${chartHeight + margin.top + margin.bottom}`)
                .attr('preserveAspectRatio', 'xMinYMin meet')
                .style('overflow', 'visible');

            const g = svg.append('g')
                .attr('transform', `translate(${leftMargin},${margin.top})`);

            // Tooltip
            const tooltip = d3.select('body').selectAll('.d3-tooltip').data([null])
                .join('div')
                .attr('class', 'd3-tooltip')
                .style('position', 'absolute')
                .style('visibility', 'hidden')
                .style('background-color', 'rgba(0, 0, 0, 1)')
                .style('color', 'white')
                .style('padding', '0.5rem')
                .style('border-radius', '4px')
                .style('font-size', '0.75rem')
                .style('pointer-events', 'none')
                .style('z-index', '1000');

            // Draw stacked bars
            let cumulativeY = 0;
            questionData.forEach((qd, qIdx) => {
                const q = qd.question;
                const textDivY = cumulativeY;
                
                const foreignObject = g.append('foreignObject')
                    .attr('x', 0)
                    .attr('y', textDivY)
                    .attr('width', innerWidth)
                    .attr('height', qd.textDivHeight);
                
                foreignObject.append('xhtml:div')
                    .style('font-family', 'IBM Plex Serif, serif')
                    .style('color', 'currentColor')
                    .style('word-wrap', 'break-word')
                    .style('overflow-wrap', 'break-word')
                    .style('padding-top', textPaddingTopRem + 'rem')
                    .style('padding-bottom', textPaddingBottomRem + 'rem')
                    .style('box-sizing', 'border-box')
                    .text(q.question);
                
                // Bar positioned after the text div with top padding
                const barY = textDivY + qd.textDivHeight + (barPaddingTopRem * remToPx);

                const x = d3.scaleLinear()
                    .domain([0, 100])
                    .range([0, innerWidth]);

                let cumulative = 0;
                q.responses.forEach((r, rIdx) => {
                    const barWidth = x(r.percentage);

                    if (r.percentage > 0) {
                        g.append('rect')
                            .attr('class', `bar response-${rIdx}`)
                            .attr('x', x(cumulative))
                            .attr('y', barY)
                            .attr('width', barWidth)
                            .attr('height', barHeightRem * remToPx)
                            .attr('fill', colors[rIdx])
                            .attr('stroke', 'currentColor')
                            .attr('stroke-width', '1px')
                            .attr('opacity', 1)
                            .on('mouseover', function(event) {
                                // Highlight all bars of the same response type
                                svg.selectAll('.bar').attr('opacity', 0.25);
                                svg.selectAll(`.response-${rIdx}`).attr('opacity', 1);
                                
                                tooltip
                                    .style('visibility', 'visible')
                                    .html(`<strong>${r.label}</strong><br/>${Math.round(r.percentage)}% (${r.count} responses)`);
                            })
                            .on('mousemove', function(event) {
                                tooltip
                                    .style('top', (event.pageY - 10) + 'px')
                                    .style('left', (event.pageX + 10) + 'px');
                            })
                            .on('mouseout', function() {
                                // Reset all bars to full opacity
                                svg.selectAll('.bar').attr('opacity', 1);
                                tooltip.style('visibility', 'hidden');
                            });
                    }
                    cumulative += r.percentage;
                });
                
                cumulativeY += qd.rowHeight;
            });

            // Remove x-axis and grid lines
        });
    }

    // initial render
    render(data);

    // re-render on resize to keep charts full-width
    window.addEventListener('resize', () => {
        render(data);
    });
});

// Text wrapping function
function wrap(text, width) {
    text.each(function() {
        const textElement = d3.select(this);
        const words = textElement.text().split(/\s+/).reverse();
        let word;
        let line = [];
        let lineNumber = 0;
        const lineHeight = 2;
        const y = textElement.attr("y");
        const dy = parseFloat(textElement.attr("dy")) || 0;
        const dx = textElement.attr("dx") || 0;
        
        let tspan = textElement.text(null)
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dx", dx)
            .attr("dy", dy + "em")
            .style("text-anchor", "end");
        
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = textElement.append("tspan")
                    .attr("x", 0)
                    .attr("y", y)
                    .attr("dx", dx)
                    .attr("dy", ++lineNumber * lineHeight + dy + "em")
                    .style("text-anchor", "end")
                    .text(word);
            }
        }
    });
}
