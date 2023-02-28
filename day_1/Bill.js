function totalGaji(gaji1, gaji2, gaji3) {
  return (
    "Total gaji yang harus dibayar :\n" +
    `Emp1 : Rp.${gaji1} + Pajak (${taxGaji(gaji1) * 100}%) = Rp.${
      gaji1 + taxGaji(gaji1) * gaji1
    }\n` +
    `Emp2 : Rp.${gaji2} + Pajak (${taxGaji(gaji2) * 100}%) = Rp.${
      gaji2 + taxGaji(gaji2) * gaji2
    }\n` +
    `Emp2 : Rp.${gaji3} + Pajak (${taxGaji(gaji3) * 100}%) = Rp.${
      gaji3 + taxGaji(gaji3) * gaji3
    }\n` +
    `Total: ${Intl.NumberFormat("ID", {
      style: "currency",
      currency: "IDR",
    }).format(
      gaji1 +
        taxGaji(gaji1) * gaji1 +
        (gaji2 + taxGaji(gaji2) * gaji2) +
        (gaji3 + taxGaji(gaji3) * gaji3)
        )}`
        );
}
function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));