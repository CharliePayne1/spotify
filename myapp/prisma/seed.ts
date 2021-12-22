import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = new PrismaClient();

const run = async () => {
    await Promise.all(artistsData.map( async (artist) => {
        return prisma.artist.upsert({
            where: { name: artist.name },
            update: {},
            create: {
                name: artist.name,
                create: {
                    songs: {
                        create: artist.songs.map(song => {
                            name: song.name,
                            duration: song.duration,
                            
                        })
                    }
                }
            }
        })
    }))
};

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
