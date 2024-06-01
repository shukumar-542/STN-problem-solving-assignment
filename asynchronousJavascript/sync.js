function syncTask(name, delay) {
    console.log(`Task ${name} started.`);
    const start = Date.now();
    while (Date.now() - start < delay * 1000) {
        // Busy-wait loop to simulate delay
    }
    console.log(`Task ${name} completed after ${delay} seconds.`);
    return `Result of ${name}`;
}
syncTask('math' , 3)