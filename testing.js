lines.forEach((line, i) => {
  const y = 100 + i * 50;
  const relativeProgress = Math.pow(progress, 1.5); // Smoother top convergence
  const factor = (lines.length - i) / lines.length;

  const x1 = baseLeftX + (tipX - baseLeftX) * relativeProgress * factor;
  const x2 = baseRightX + (tipX - baseRightX) * relativeProgress * factor;
  const newY = y + (tipY - y) * relativeProgress * factor;

  line.setAttribute("x1", x1);
  line.setAttribute("x2", x2);
  line.setAttribute("y1", newY);
  line.setAttribute("y2", newY);
});
