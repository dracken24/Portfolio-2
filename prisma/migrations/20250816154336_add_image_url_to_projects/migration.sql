-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "url" DROP NOT NULL;
