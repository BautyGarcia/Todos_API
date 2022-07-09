-- CreateTable
CREATE TABLE "todo" (
    "todo_id" SERIAL NOT NULL,
    "description" VARCHAR(255),

    CONSTRAINT "todo_pkey" PRIMARY KEY ("todo_id")
);
